const express = require('express')
const helmet = require('helmet')
const cors = require('cors')

const server = express();

const animalRoute = require('../routes/animals.js')
const userRoute = require('../routes/users/users')

const userMetaRoute = require('../routes/users_meta/users_meta')

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/api/animals', animalRoute)
server.use('/api/users', userRoute)

server.use('/api/user_meta', userMetaRoute)


server.get('/', (req, res) => {
    res.send("It's Working! PAWS UP!");
})

module.exports = server;