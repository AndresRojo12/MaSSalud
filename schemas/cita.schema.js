const Joi = require('joi');

const id = Joi.number().integer();
const userId = Joi.number().integer();
const specialty = Joi.string().max(200);
const doctor = Joi.string().max(200);
const schedule= Joi.string().max(200);
const workingDay = Joi.string().max(200);
const date = Joi.date();
const hour= Joi.string().regex(/^([01]\d|2[0-3]):([0-5]\d):([0-5]\d)$/);
const created_by = Joi.number().integer();
const created_at = Joi.date();
const updated_by = Joi.number().integer();
const updated_at = Joi.date();
const deleted = Joi.boolean();
const deleted_by = Joi.number().integer();
const deleted_at = Joi.date();

createCitasSchema = Joi.object({
  userId:userId.required(),
  specialty:specialty.required(),
  date:date.required(),
  doctor:doctor.required(),
  schedule:schedule.required(),
  workingDay:workingDay.required(),
  hour:hour.required(),
  created_by: created_by,
  created_at: created_at,
  updated_by: updated_by,
  updated_at: updated_at,
  deleted: deleted,
  deleted_by: deleted_by,
  deleted_at: deleted_at,
});

getCitasSchema = Joi.object({
  id: id.required()
});

updateCitasSchema = Joi.object({
  specialty:specialty,
  date:date,
  hour:hour,
  userId:userId,
  created_by: created_by,
  created_at: created_at,
  updated_by: updated_by,
  updated_at: updated_at,
  deleted: deleted,
  deleted_by: deleted_by,
  deleted_at: deleted_at,
})

module.exports = { createCitasSchema, getCitasSchema, updateCitasSchema }
