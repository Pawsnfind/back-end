const router = require("express").Router();
const stripe = require("stripe")(process.env.stripe_secret);

const bodyParser = require("body-parser").text();

function getToken(req, res, next){
    req.data = req.body.data;
    req.body = req.body.token;
    next();
}

router.post("/charge", getToken, bodyParser, async (req, res) => {
    const amount = req.data;
   
    const shelter_account_id = await Shelter.getAccountID(req.data.selter_id);
    console.log(amount)
    try {
       await stripe.charges.create({
        amount: amount,
        currency: "usd",
        description: "An example charge",
        source: req.body,
        transfer_data: {
            destination: shelter_account_id,
          },
      }).then(result => {
        console.log(result);
         res.status(200).json(result);
      });
 
   
      
    } catch (err) {
      res.status(500).end();
    }
  });

  module.exports = router;