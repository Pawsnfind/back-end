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

async function createCustomer (req, res, next) {
  const stripe = require("stripe")(process.env.stripe);

  const ein = await shelter.getByEIN(req.params.id);
  try{
    stripe.customers.create({
       address: {
          line1: req.body.address1,
          line2: req.body.address2,
          city: req.body.city,
          state: req.body.state,
          postal_code: req.body.zip
       },
       email: req.body.email,
       name: req.body.name,
       phone: req.body.phone,
       tax_exempt: "exempt",
       tax_id_data: ein,
    }, function(err, customer) {
        if (err)
          res.status(400).json({error: 'Error creating customer'})
        else
          req.customer = customer;
          next();
    });
  }
  catch(err){
    res.status(500).json({error: "Error creating customer"});
  }
}

function createAccount (req, res, next) {
  const stripe = require("stripe")(process.env.stripe);

  try{
   stripe.accounts.create(
    {
      type: "custom",
      country: "US",
      email: req.body.email,
      requested_capabilities: ["card_payments"]
    },
    function(err, account) {
       if (err){
         res.status(400).json({error: err});
          return;
       }
       else{
          req.body.account = account;
          return;
       }
    }
  );
  }
  catch(err){
    res.status(500).json({error: "Error creating account"});
  }
}

function createBankAccount (req, res, next) {
  const stripe = require("stripe")(process.env.stripe);

  try{
    stripe.customers.createSource(
      req.customer.id,
      {
        source: req.body.bankToken,
      },
      function(err, bank_account) {
        if (err){
          res.status(400).json({error: err});
           return;
        }
        else{
           req.body.bank = bank;
           return;
        }      
      }
    
  );
  }
  catch(err){
    res.status(500).json({error: "Error creating account"});
  }
}

 

router.post("/account", createCustomer, createBankAccount, createAccount, (req, res) => {
  const stripe = require("stripe")(process.env.stripe);

  try{

    stripe.accounts.createExternalAccount(
      req.body.account.id,
      {
        external_account: req.body.bank.id,
      },
      function(err, external_account) {
          if (err){
            res.status(400).json({error: err});
             return;
          }
          else{
             req.body.external = external_account;
             return;
          }     
      });
  }
  catch(err){
    res.status(500).json({error: "Error creating account"});
  }
});

module.exports = router;
