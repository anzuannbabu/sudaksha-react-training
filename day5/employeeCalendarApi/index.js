const express = require('express');
const bodyParser = require("body-parser");
const router = require('./routes/routing');

var cors = require('cors')

const app = express();

app.use(cors())

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

app.use('/api', router);
app.listen(3009);
console.log(' RESTful API server started on: 3009');

