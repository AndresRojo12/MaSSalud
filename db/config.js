const { config } = require('./../config/config');

let URI;

if (process.env.NODE_ENV === 'production') {
  // En producción, usa la URL proporcionada por Render
  URI = process.env.DATABASE_URL;
} else {
  // En desarrollo, construye la URL manualmente
  const USER = encodeURIComponent(config.dbUser);
  const PASSWORD = encodeURIComponent(config.dbPassword);
  URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;
}

module.exports = {
  development: {
    url: URI,
    dialect: 'postgres',
  },
  production: {
    url: URI,
    dialect: 'postgres',
  },
};
