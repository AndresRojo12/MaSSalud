const express = require('express');

const router = express.Router();

router.get('/',(req, res) => {
  console.log('ruta usuarios');
});

router.get('/:id', (req,res) => {
  console.log();
});

router.post('/', (req, res) => {
  console.log();
})

module.exports = router
