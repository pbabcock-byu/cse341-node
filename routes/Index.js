const routes = require('express').Router();
const lesson1Controller = require('../controllers/lesson1');

routes.get('/angela', lesson1Controller.angelaRoute);
routes.get('/peter', lesson1Controller.peterRoute);
routes.get('/', lesson1Controller.testRoute);

module.exports = routes;
