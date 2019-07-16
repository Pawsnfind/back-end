const router = require("express").Router();
const Subscription = require('../models/subscriptions/subscriptions.js')

router.get('/', (req, res) => {
    Subscription.getAllSubscriptions()
    .then(subs => {
        res.status(200).json(subs)
    })
    .catch(err => {
        res.status(500).json({ message: "Error getting subscriptions", err: err.toString()})
    })
})

router.get('/:id', (req, res) => {
    const { id } = req.params;

    Subscription.getSubscriptionbyID(id)
    .then(sub => {
        res.status(200).json(sub)
    })
    .catch(err => {
        res.status(500).json({ message: "Error getting subscription", err: err.toString()})   
     })
})

router.get('/shelter/:id', (req, res) => {
    const { id } = req.params;

    Subscription.getSubscriptionbyShelter(id)
    .then(sub => {
        res.status(200).json(sub)
    })
    .catch(err => {
        res.status(500).json({ message: "Error getting subscription", err: err.toString()})
    })

})

router.get('/level/:id', (req ,res) =>{
    const { id } = req.params;

    Subscription.getSubscriptionbyLevel(id)
    .then(sub => {
        res.status(200).json(sub)
    })
    .catch(err => {
        res.status(500).json({ message: "Error getting subscription", err: err.toString()})
    })
})


router.post('/', (req, res) => {
    
    const { shelter_id, subscription_id, expiration_date, is_active } = req.body

    Subscription.addSubscription({ shelter_id, subscription_id, expiration_date, is_active })
    .then(sub => {
        res.status(201).json({ message: "Successfully subscribed", sub})
    })
    .catch(err => {
        res.status(500).json({ message: "Error subscribing", err: err.toString() })
    })
    
})

router.put('/:id', (req, res) => {
    
    const { id } = req.params
    const { shelter_id, subscription_id, expiration_date, is_active } = req.body

    Subscription.updateSubscription(id, { shelter_id, subscription_id, expiration_date, is_active })
    .then(sub => {
        res.status(200).json({ message: "Successfully updated", sub})
    })
    .catch(err => {
        res.status(500).json({ message: "Error getting updated", err: err.toString() })
    })
    
})

module.exports = router;