const express = require('express');

const { checkAuth, checkUser } = require('../middleware/auth0');

const router = express.Router();




router.post('/', checkAuth, checkUser, (req, res) => {
// if checkAuth fails, status 401
    if (req.body.user){
        console.log(req.body.user)
        res.status(200).json(req.body.user);
    }
    else
    res.status(500).json({ error: 'Something went wrong while logging in'});


})

module.exports=router;