/**
 * @author : Aviral Dua
 * @description : Entry point for the application
 */
const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const sapcai = require('sapcai').default
const cors = require('cors')
var errorhandler = require('errorhandler')
const app = express();
const routes = require('./app/routes')
const mongoose = require('mongoose');

var request = new sapcai.request('973ef83230f2ebaf10fb7ebe48367640', 'en')

const port = 8080
app.use(bodyParser.json())
app.use(cors());
app.use(errorhandler());
app.use('/',routes);

app.post('/errors', (req, res) => {
    console.log(req.body)
    res.send()
})

app.listen(port, () => {
    console.log('Server is running on port 8080')
})