const router = require("express").Router();
const Animals_status = require("../../models/internal-tables/animals_status");

router.get("/animals_status", (req, res) => {
  Animals_status.getAll()
    .then(status => {
      res.status(200).json(status);
    })
    .catch(error => {
      res.status(500).json({ error: `Can not access the database` });
    });
});

router.get("/animals_status/:id", (req, res) => {
  Animals_status.getById(req.params.id)
    .then(status => {
      res.status(200).json(status);
    })
    .catch(error => {
      res.status(500).json({ error: `Can not access the status by id` });
    });
});

router.post("/animals_status", (req, res) => {
  Animals_status.add(req.body)
    .then(status => {
      res.status(200).json(status);
    })
    .catch(error => {
      res.status(500).json({ error: `Can not add status` });
    });
});

router.put("/animals_status/:id", (req, res) => {
  Animals_status.update(req.params.id, req.body)
    .then(status => {
      res.status(200).json({ message: `${status} record(s) has been updated` });
    })
    .catch(error => {
      res.status(500).json({ error: `Can not update status` });
    });
});

router.delete("/animals_status/:id", (req, res) => {
  Animals_status.remove(req.params.id)
    .then(count => {
      res.status(200).json({ message: `${count} record(s) has been deleted` });
    })
    .catch(error => {
      res.status(500).json({ error: `Can not delete this status` });
    });
});

module.exports = router;
