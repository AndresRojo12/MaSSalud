const express = require('express');
const cors  = require('cors');
const routerApi = require('./routes');

const { logError, errorHandler, boomErrorHandler, ormErrorHandler } = require('./middlewares/errorHandler');

const app = express();

const port = process.env.PORT || 3000
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('server express');
})

routerApi(app);
app.use(logError);
app.use(ormErrorHandler);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log('corriendo por el', port);
})
