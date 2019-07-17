const express = require('express')
const helmet = require('helmet')
const cors = require('cors')

const server = express();

const animalRouter = require('../routes/animals.js')
const applicationRouter = require('../routes/applications.js')
const donationRouter = require('../routes/donations.js')
const shelterRouter = require('../routes/shelters.js')
const subscriptionRouter = require('../routes/subscriptions.js')
const userRouter = require('../routes/users.js')
const internalAge = require('../routes/internal/ages.js')

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/api/animals', animalRouter)
server.use('/api/applications', applicationRouter)
server.use('/api/donations', donationRouter)
server.use('/api/shelters', shelterRouter)
server.use('/api/subscriptions', subscriptionRouter)
server.use('/api/users', userRouter)
server.use('/api/internal/paws/ages', internalAge)


server.get('/', (req, res) => {
    res.send("It's Working! PAWS UP!");
})

module.exports = server;