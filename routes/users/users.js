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

router.get('/:id', (req, res) => {
    Users.getUserById(req.params.id)
    .then( user => {
        res.status(200).json(user)
    })
    .catch( error => {
        res.status(500).json(error)
    })
})

router.post('/', (req, res) => {
    Users.createUser(req.body, 'id')
    .then( newUser => {
        res.status(200).json(newUser)
    })
    .catch( error => {
        res.status(500).json(error)
    })
})

router.put('/:id', (req, res) => {
    Users.updateUser(req.body, req.params.id)
    .then( updated => {
        if (updated) {
            res.status(200).json(updated)
        } else {
            res.status(404).json({ message: 'User Not Found' })
        }
    })
    .catch( error => {
        res.status(500).json(error)
    })
})

router.delete('/:id', (req, res) => {
    Users.removeUser(id)
})

module.exports=router;