const { Strategy } = require('passport-local');
const boom = require('@hapi/boom');
const bcrypt = require('bcrypt');
const servicioUsuario = require('./../../../services/usuario.service');

const servicio = new servicioUsuario();

const LocalStrategy = new Strategy(
async (email, password, done) => {
  try {
    const usuario = await servicio.findByEmail(email);
    if(!usuario){
      done(boom.unauthorized(),false);
    }
    const isMatch = await bcrypt.compare(password, usuario.password);
    if(!isMatch){
      done(boom.unauthorized(),false);
    }
    done(null, usuario);
  } catch (error) {
    done(error, false);
  }
});

module.exports = LocalStrategy;