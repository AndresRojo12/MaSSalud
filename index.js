const express = require('express');
const routerApi = require('./routes')

const app = express();

const port = 3001

app.get('/', (req, res) => {
  res.send('server express');
})

routerApi(app);

app.listen(port, () => {
  console.log('corriendo por el', port);
})
