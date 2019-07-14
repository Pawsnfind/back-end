const router = require('express').Router();
const Users = require('../../models/users/users');

router.get('/', (req, res) => {
    Users.getUsers()
    .then( users => {
        res.status(200).json(users)
    })
    .catch( error => {
        res.status(500).json(error)
    })
});

module.exports=router;