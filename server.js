const express = require('express');
const { check, validationResult } = require('express-validator');
const bodyParser = require('body-parser');
const cors = require('cors');
const router = require('./routers')
require('dotenv').config({path: 'variables.env'})

const app = express();

app.disable('x-powered-by');

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}))


app.use('/api' , router)
/* app.get('/:name',[check('name').isAlpha()], (req, res) => {
  console.log(validationResult(req))
  res.send(req.params)
}) */


const start = () => {
  app.listen(process.env.PORT || 4000, () => { console.log('server started 🚀🚀🚀🚀')})
}

module.exports = {
  app,
  start
}