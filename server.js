const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const router = require('./routers')
const errorHandlers = require('./handlers/errorHandlers');
require('dotenv').config({path: 'variables.env'})


const app = express();

app.disable('x-powered-by');

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}))


app.use('/api', router)

// production error handler
app.use(errorHandlers.productionErrors);

const start = () => {
  app.listen(process.env.PORT || 4000, () => { console.log('server started 🚀🚀🚀🚀',process.env.PORT )})
}

module.exports = {
  app,
  start
}