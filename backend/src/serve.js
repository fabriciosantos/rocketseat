const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');
const server = express();

mongoose.connect('mongodb://ds157956.mlab.com:57956/rocketseat', {
    auth: {
        user: 'user',
        password: 'rocketseat1'
    },
    useNewUrlParser: true,
}, (err) => console.log(err));

server.use(cors());
server.use(express.json());
server.use(routes);


server.listen(3333);