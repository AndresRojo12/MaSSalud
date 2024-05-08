const servicioUsuario = require('./usuario.service');
const nodemailer = require("nodemailer");

const boom = require('@hapi/boom');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { config } = require('../config/config');

const servicio = new servicioUsuario();

class AuthService {
  async getUser(email, password) {
    const usuario = await servicio.findByEmail(email);
    if(!usuario){
      throw boom.unauthorized();
    }
    const isMatch = await bcrypt.compare(password, usuario.password);
    if(!isMatch){
      throw boom.unauthorized();
    }
    delete usuario.dataValues.password;
    return usuario;
  }

  singToken(user) {

    const payload = {
      sub:user.id,
      role:user.role
    }
    const token = jwt.sign(payload, config.jwtSecret);
    return {
      user,
      token
    };

  }

  async sendRecovery(email) {
    const usuario = await servicio.findByEmail(email);
    if(!usuario){
      throw boom.unauthorized();
    }
    const payload = { sub: usuario.id };
    const token = jwt.sign(payload, config.jwtSecret, {expiresIn: '15min'});
    const link = `http://localhost:3000/login/nueva_contrasena?token=${token}`;
    await servicio.update(usuario.id, { recoveryToken: token });
    const mail = {
      from: config.smtpEmail,
      to: `${usuario.email}`,
      subject: "Recuperación de contraseña",
      text: `¡Hola ${usuario.name}!`,
      html: `<b>¡Hola ${usuario.name}! Ingresa a este link => ${link} </b>`,
    }
    const rta = await this.sendMail(mail);
    return rta;
  }

  async changePassword(token, newPassword) {
    try {
      const payload = jwt.verify(token,config.jwtSecret);
      const usuario = await servicio.findOne(payload.sub);
      if(usuario.recoveryToken !== token) {
        throw boom.unauthorized();
      }
      const hash = await bcrypt.hash(newPassword, 10);
      await servicio.update(usuario.id, { recoveryToken:null, password:hash });
      return { message: 'contraseña cambiada' };
    } catch (error) {
     throw boom.unauthorized();
    }
  }

  async sendMail(infoMail) {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      secure: true,
      port: 465,
      auth: { user: config.smtpEmail, pass: config.smtpPassword },
    });

    await transporter.sendMail(infoMail);
    return { message: 'mail sent' };
  }
}

module.exports = AuthService;
