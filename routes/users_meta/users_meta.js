const router = require('express').Router();
const UserMetas = require('../../models/users_meta/users_meta');

router.get('/:id', (req, res) => {
    UserMetas.getUserMetaById(req.params.id)
    .then( user_meta => {
        res.status(200).json(user_meta)
    })
    .catch( error => {
        res.status(500).json(error)
    })
});

module.exports=router;