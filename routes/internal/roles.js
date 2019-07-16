const router = require("express").Router;
const Roles = require("../../models/internal-tables/roles");

router.get("/roles", (req, res) => {
  Roles.getAll()
    .then(role => {
      res.status(200).json(role);
    })
    .catch(error => {
      res.status(500).json({ error: `Can not access database` });
    });
});

router.get("/roles/:id", (req, res) => {
  Roles.getById(req.params.id)
    .then(role => {
      res.status(200).json(role);
    })
    .catch(error => {
      res.status(500).json({ error: `Can not access the role by id` });
    });
});

router.post("/roles", (req, res) => {
  Roles.add(req.body)
    .then(role => {
      res.status(200).json(role);
    })
    .catch(error => {
      res.status(500).json({ error: `Can not add role` });
    });
});

router.delete("/roles/:id", (req, res) => {
  Roles.remove(req.params.id)
    .then(count => {
      res.status(200).json({ message: `${count} record(s) has been deleted` });
    })
    .catch(error => {
      res.status(500).json({ error: `Can not delete record` });
    });
});

router.put("/roles/:id", (req, res) => {
  Roles.update(req.params.id, req.body)
    .then(role => {
      res.status(200).json(role);
    })
    .catch(error => {
      res.status(500).json({ error: `Can not update role` });
    });
});

module.exports = router;