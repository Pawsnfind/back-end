const express = require('express');
const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');
const jwtDecode = require('jwt-decode');
const Users = require('../models/users/users.js');
// if checkAuth fails, status 401
const checkAuth = jwt({ 
    secret: jwksRsa.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: process.env.jwksUri
    }),
 
    algorithms: ['RS256']
});

function checkUser (req, res, next) {

    const decoded = jwtDecode(req.headers.authorization);

    Users.getUserBySubId(decoded.sub).then(async user => {
        if (!user)
        {
            const newUser = {
                email: decoded.email,
                sub_id : decoded.sub,
                username: decoded.nickname
            }
             Users.createUser(newUser).then(user =>{
                const response = {
                    newUser: true,
                    user_id: user.id,
                    email: decoded.email,
                    email_verified: decoded.email_verified,
                    name: decoded.name,
                    nickname: decoded.nickname,
                    picture: decoded.picture
                }
                req.body.user = response;
                next();
            })
        }
        else{
            const response = {
                newUser: false,
                user_id: user.id,
                email: decoded.email,
                email_verified: decoded.email_verified,
                name: decoded.name,
                nickname: decoded.nickname,
                picture: decoded.picture
            }
    
            req.body.user = response;
            next();
        }
    })
}

module.exports={ checkAuth, checkUser};