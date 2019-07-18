const router = require("express").Router();
const Subscriptions = require("../../models/internal-tables/subscriptions");

router.get("/", (req, res) => {
  Subscriptions.getAll()
    .then(subscriptions => {
      res.status(200).json(subscriptions);
    })
    .catch(error => {
      res.status(500).json({ error: `Can not get subscriptions from database` });
    });
});

router.get("/:id", (req, res) => {
  Subscriptions.getById(req.params.id)
    .then(subscription => {
      res.status(200).json(subscription);
    })
    .catch(error => {
      res.status(500).json({ error: `Can not access the subscription by id` });
    });
});

router.post("/", (req, res) => {
  Subscriptions.add(req.body.subscription, req.body.subscription_duration_mo, req.body.price)
    .then(subscription => {
      res.status(200).json(subscription);
    })
    .catch(error => {
      res.status(500).json({ error: `Can not add subscription` });
    });
});

router.delete("/:id", (req, res) => {
  Subscriptions.remove(req.params.id)
    .then(count => {
      res.status(200).json({ message: `${count} record(s) has been deleted` });
    })
    .catch(error => {
      res.status(500).json({ error: `Can not delete subscription` });
    });
});

router.put("/:id", (req, res) => {
  Subscriptions.update(req.params.id, req.body)
    .then(subscription => {
      res.status(200).json({ message: `${subscription} record(s) has been updated successfully` });
    })
    .catch(error => {
      res.status(500).json({ error: `Can not update subscription` });
    });
});

module.exports = router;

