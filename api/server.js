const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const auth = require('../routes/auth/auth-router');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/auth', auth);

server.get('/', (req, res) => {
    res.send("It's Working! PAWS UP!");
})


module.exports = server;