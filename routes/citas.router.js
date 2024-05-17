const express = require('express');
const CitaService = require('../services/cita.service');
const validatorHandler = require('./../middlewares/validator.handler');

const { createCitasSchema, getCitasSchema, updateCitasSchema } = require('./../schemas/cita.schema');

const service = new CitaService();
const router = express.Router();

router.get('/', async(req, res,next) => {
 try {
   const cita = await service.find();
   res.json(cita);
 } catch (error) {
  next(error)
 }
});

router.get('/:id',validatorHandler(getCitasSchema, 'params'),
  async (req,res,next)=> {
    try {
      const { id } = req.params;
      const body = req.body;

      const citas = await service.findOne(id, body);
      res.json(citas);

    } catch (error) {
      next(error);
    }
});

router.post('/',
validatorHandler(createCitasSchema, 'body'),
async (req, res, next) => {
  try {
    const body = req.body
    const cita = await service.create(body);
    res.json(cita);

  } catch (error) {
    next(error)
  }
})

router.patch('/:id', validatorHandler(getCitasSchema, 'params'),
validatorHandler(updateCitasSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const citas = await service.update(id, body);

      res.json(citas);
    } catch (error) {
      next(error)
    }
  }
)

router.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const citas = await service.delete(id);
    res.json(citas);

  } catch (error) {
    next(error)
  }
})

module.exports = router
