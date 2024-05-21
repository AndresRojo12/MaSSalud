require('dotenv').config();

const config = {
  env: process.env.NODE_ENV || 'dev',
  port: process.env.PORT || 3000,
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD,
  dbHost: process.env.DB_HOST,
  dbName: process.env.DB_NAME,
  dbPort: process.env.DB_PORT,
  jwtSecret: process.env.JWT_SECRET,
  smtpEmail: process.env.SMTP_EMAIL,
  smtpPassword: process.env.SMTP_PASSWORD,
  emailSuperAdmin: process.env.EMAIL_SUPER_ADMIN,
  emailAdmin: process.env.EMAIL_ADMIN,
  AdminPassword: process.env.ADMIN_PASSWORD,
  passwordAdmin: process.env.PASSWORD_ADMIN,
  credentialCorreo: process.env.CREDENTIAL_CORREO
}

// config/config.js
module.exports = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: 'postgres',
  },
  production: {
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false, // solo si tu base de datos requiere SSL
      },
    },
  },
};


module.exports = { config };
