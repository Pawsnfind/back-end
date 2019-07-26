const router = require("express").Router();
const shelter = require('../models/shelters/shelters');
const request = require("request");

router.get('/validate', checkEIN, (req, res) => {
     request.get(
        {
          url: `https://www.melissa.com/v2/lookups/npo/ein?ein=${req.body.ein}&fmt=json`,
          header: { "Content-type": "application/json" }
        },
        async (err, httpResponse, body) => {
          if (err || httpResponse.statusCode === 400 || httpResponse === 500) {
            res.status(400).json(body);
            return;
          } 
          else 
          {
            body = JSON.parse(body);
            if (body.length === 0)
                res.status(400).json({error: 'Invalid EIN'});
            else
                res.status(200).json(body);
          }
        }
      );
})

function checkEIN(req, res, next){

    if (!req.body.ein)
        res.status(400).json({error: 'No EIN provided'});
    shelter.getByEIN(req.body.ein)
    .then(response =>{
        if (!response)
            next();
        else
            res.status(400).json({error: 'EIN already exists'});
    })
    .catch(err =>
        {
            res.status(500).json({error: err.message});
        })
}

module.exports = router;