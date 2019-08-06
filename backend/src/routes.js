const express = require('express');

const routes = express.Router();

const DevController = require('./controllers/DevController');
const LikeController = require('./controllers/LikeController');
const DislikeController = require('./controllers/DislikesController');

routes.post('/dev', DevController.save);
routes.post('/dev/:devId/likes', LikeController.save);
routes.post('/dev/:devId/dislikes', DislikeController.save);
routes.get('/devs', DevController.findAll);
module.exports = routes;