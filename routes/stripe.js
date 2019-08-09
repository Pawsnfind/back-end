const router = require("express").Router();
const stripe = require("stripe")(process.env.stripe_secret);
const shelter = require("../models/shelters/shelters.js");

const bodyParser = require("body-parser").text();

function getToken(req, res, next) {
  req.data = req.body.data;
  req.body = req.body.token;
  next();
}

function getAccountID(req, res, next) {
  shelter
    .getAccountID(req.data.shelter_id)
    .then(result => {
      if (result) {
        req.account_id = result.account_id;
        next();
      } else res.status(400).json({ error: "Error retrieving account id" });
    })
    .catch(err => {
      res.status(500).json({ error: "Error retrieving account id" });
    });
}

router.post("/donate", getToken, getAccountID, bodyParser, async (req, res) => {
  try {
    await stripe.charges
      .create({
        amount: req.data.amount,
        currency: "usd",
        description: "An example charge",
        source: req.body,
        transfer_data: {
          destination: req.account_id
        }
      })
      .then(result => {
        console.log(result);
        res.status(200).json(result);
      });
  } catch (err) {
    res.status(500).json({ error: "Error, could not donate" });
  }
});

router.post("/account",  async (req, res) => {
  const stripe = require("stripe")("sk_test_4eC39HqLyjWDarjtT1zdp7dc");

  await stripe.accounts.create(
    {
      type: "custom",
      country: "US",
      email: req.body.email,
      requested_capabilities: ["card_payments"]
    },
    function(err, account) {
       if (err){
         res.status(400).json({error: err});
       }
       else{
         res.status(200).json(account);
       }
    }
  );

    res.status(500).json({error: "Error creating account"});
});

module.exports = router;
