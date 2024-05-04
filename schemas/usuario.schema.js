const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().max(100);
const lastName = Joi.string().max(100);
const secondSurname = Joi.string().max(100);
const documentType = Joi.string().max(200);
const identificationCard = Joi.number().integer();
const expeditionDate = Joi.date();
const birthdate = Joi.date();
const gender = Joi.string().max(100);
const phone = Joi.string();
const eps = Joi.string().max(100);
const email = Joi.string().email().max(100);
const password = Joi.string().max(100);
const role = Joi.string().max(100);
const created_by = Joi.number().integer();
const created_at = Joi.date();
const updated_by = Joi.number().integer();
const updated_at = Joi.date();
const deleted = Joi.boolean();
const deleted_by = Joi.number().integer();
const deleted_at = Joi.date();

createUsuariosSchema = Joi.object({
  name:name.required(),
  lastName:lastName.required(),
  secondSurname:secondSurname.required(),
  documentType:documentType.required(),
  identificationCard:identificationCard.required(),
  expeditionDate:expeditionDate.required(),
  birthdate:birthdate.required(),
  gender:gender.required(),
  phone:phone.required(),
  eps:eps.required(),
  email:email.required(),
  role:role,
  password: password.required(),
  created_by: created_by,
  created_at: created_at,
  updated_by: updated_by,
  updated_at: updated_at,
  deleted: deleted,
  deleted_by: deleted_by,
  deleted_at: deleted_at,
});

getUsuariosSchema = Joi.object({
  id: id.required()
});

updateUsuariosSchema = Joi.object({
  name:name,
  lastName:lastName,
  secondSurname:secondSurname,
  identificationCard:identificationCard,
  expeditionDate:expeditionDate,
  birthdate:birthdate,
  gender:gender,
  phone:phone,
  eps:eps,
  email:email,
  password:password,
  created_by: created_by,
  created_at: created_at,
  updated_by: updated_by,
  updated_at: updated_at,
  deleted: deleted,
  deleted_by: deleted_by,
  deleted_at: deleted_at,
})

module.exports = { createUsuariosSchema, getUsuariosSchema, updateUsuariosSchema }
