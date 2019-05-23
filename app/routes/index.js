const routes = require('express').Router();
const cai = require('./cai');

routes.use('/cai',cai);

module.exports = routes;