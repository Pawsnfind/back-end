const router = require("express").Router();
const Users = require('../models/users/users.js')


router.get('/', (req, res) => {
    Users.getUsers()
    .then( users => {
        res.status(200).json(users)
    })
    .catch( error => {
        res.status(500).json({ message: "Error getting users", error: error.toString()})
    })
})

module.exports = router;