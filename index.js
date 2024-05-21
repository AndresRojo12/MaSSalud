const express = require('express');
const cors  = require('cors');
const routerApi = require('./routes');
const path = require('path');

const { logError, errorHandler, boomErrorHandler, ormErrorHandler } = require('./middlewares/errorHandler');

const app = express();

const port = process.env.PORT || 3000
app.use(express.json());
app.use(cors());

require('./utils/auth');

app.get('/', (req, res) => {
  res.send('server express');
})

const nuxtDistPath = path.join(__dirname, './frontend/dist');
app.use(express.static(nuxtDistPath));

app.get('*', (req, res) => {
  res.sendFile(path.join(nuxtDistPath, '/frontend/dist/index.html'));
});

routerApi(app);
app.use(logError);
app.use(ormErrorHandler);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log('corriendo por el', port);
})
