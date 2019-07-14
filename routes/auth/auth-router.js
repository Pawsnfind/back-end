const express = require('express');
const jwtDecode = require('jwt-decode');

const checkAuth = require('../../middleware/auth0/auth0-middleware');

const router = express.Router();

router.post('/', checkAuth, async (req, res) => {
// if checkAuth fails, status 401

const decoded = jwtDecode(req.headers.authorization);
 
res.status(200).json({ message: 'Login Successful', decoded: decoded });
})

module.exports=router;