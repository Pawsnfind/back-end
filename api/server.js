const express = require('express')
const helmet = require('helmet')
const cors = require('cors')

const server = express();

const animalRoute = require('../routes/animals.js')
const shelterRoute = require('../routes/shelters/shelters.js')

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/api/animals', animalRoute)
server.use('/api/shelters',shelterRoute)


server.get('/', (req, res) => {
    res.send("It's Working! PAWS UP!");
})

module.exports = server;