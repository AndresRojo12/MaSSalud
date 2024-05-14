const express = require('express');
const UsuarioService = require('../services/usuario.service');
const validatorHandler = require('./../middlewares/validator.handler');

const { createUsuariosSchema, getUsuariosSchema, updateUsuariosSchema } = require('./../schemas/usuario.schema');

const service = new UsuarioService();
const router = express.Router();

router.get('/', async(req, res,next) => {
 try {
   const usuario = await service.find();
   res.json(usuario);
 } catch (error) {
  next(error)
 }
});

router.get('/:id',validatorHandler(getUsuariosSchema, 'params'),
  async (req,res,next)=> {
    try {
      const { id } = req.params;
      const body = req.body;

      const usuarios = await service.findOne(id, body);
      res.json(usuarios);

    } catch (error) {
      next(error);
    }
});

router.post('/',
validatorHandler(createUsuariosSchema, 'body'),
async (req, res, next) => {
  try {
    const body = req.body
    const usuario = await service.create(body);
    res.json(usuario);

  } catch (error) {
    next(error)
  }
})

router.patch('/:id', validatorHandler(getUsuariosSchema, 'params'),
validatorHandler(updateUsuariosSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const usuarios = await service.update(id, body);

      res.json(usuarios);
    } catch (error) {
      next(error)
    }
  }
)

router.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const usuarios = await service.delete(id);
    res.json(usuarios);

  } catch (error) {
    next(error)
  }
})

module.exports = router
