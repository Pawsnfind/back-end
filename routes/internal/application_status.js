const router = require("express").Router;
const Application_status = require("../../models/internal-tables/application_status");

router.get("/application_status", (req, res) => {
  Application_status.getAll()
    .then(status => {
      res.status(200).json(status);
    })
    .catch(error => {
      res.status(500).json({ error: `Can not access database` });
    });
});

router.get("/application_status/:id", (req, res) => {
  Application_status.getById(req.params.id)
    .then(status => {
      res.status(200).json(status);
    })
    .catch(error => {
      res.status(500).json({ error: `Can not get status by id` });
    });
});

router.post("/application_status", (req, res) => {
  Application_status.add(req.body)
    .then(status => {
      res.status(200).json(status);
    })
    .catch(error => {
      res.status(500).json({ error: `Can not get status` });
    });
});

router.put("/application_status/:id", (req, res) => {
  Application_status.update(req.params.id, req.body)
    .then(status => {
      res.status(200).json(status);
    })
    .catch(error => {
      res.status(500).json({ error: `Can not update status` });
    });
});

router.delete("/application_status/:id", (req, res) => {
  Application_status.remove(req.params.id)
    .then(count => {
      res.status(200).json({ message: `${count} record(s) has been deleted` });
    })
    .catch(error => {
      res.status(500).json({ error: `Can not delete this status` });
    });
});

module.exports = router;
