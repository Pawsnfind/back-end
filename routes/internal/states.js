const router = require("express").Router;
const States = require("../../models/internal-tables/states");

router.get("/", (req, res) => {
  States.getAll()
    .then(states => {
      res.status(200).json(states);
    })
    .catch(error => {
      res.status(500).json({ error: `Can not get states from database` });
    });
});

router.get("/:id", (req, res) => {
  States.getById(req.params.id)
    .then(state => {
      res.status(200).json(state);
    })
    .catch(error => {
      res.status(500).json({ error: `Can not access the state by id` });
    });
});

router.post("/", (req, res) => {
  States.add(req.body)
    .then(state => {
      res.status(200).json(state);
    })
    .catch(error => {
      res.status(500).json({ error: `Can not add state` });
    });
});

router.delete("/:id", (req, res) => {
  States.remove(req.params.id)
    .then(count => {
      res.status(200).json({ message: `${count} record(s) has been deleted` });
    })
    .catch(error => {
      res.status(500).json({ error: `Can not delete state` });
    });
});

router.put("/:id", (req, res) => {
  States.update(req.params.id, req.body)
    .then(state => {
      res.status(200).json({ message: `${state} record(s) has been updated` });
    })
    .catch(error => {
      res.status(500).json({ error: `Can not update state` });
    });
});

module.exports = router;
