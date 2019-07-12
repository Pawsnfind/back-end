const express = require('express');

const checkAuth = require('../../middleware/auth0/auth0-middleware');

const router = express.Router();

router.post('/', checkAuth, async (req, res) => {
// if checkAuth fails, status 401
res.status(200).json(req.body);
})

module.exports=router;