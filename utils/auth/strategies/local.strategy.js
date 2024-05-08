const { Strategy } = require('passport-local');

const AuthService = require('./../../../services/auth.service');

const servicio = new AuthService();

const LocalStrategy = new Strategy({
  usernameField: 'email',
  passwordField: 'password'
},
async (email, password, done) => {
  try {
    const usuario = await servicio.getUser(email, password);
    done(null, usuario);
  } catch (error) {
    done(error, false);
  }
});

module.exports = LocalStrategy;
