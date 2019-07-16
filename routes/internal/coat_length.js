const router = require("express").Router;
const Coat_length = require("../../models/internal-tables/coat_length");

router.get("/coat_length", (req, res) => {
  Coat_length.getAll()
    .then(lengths => {
      res.status(200).json(lengths);
    })
    .catch(error => {
      res.status(500).json({ error: `Can not access the database` });
    });
});

router.get("/coat_length/:id", (req, res) => {
  Coat_length.getById(req.params.id)
    .then(length => {
      res.status(200).json(length);
    })
    .catch(error => {
      res.status(500).json({ error: `Can not access the coat length by id` });
    });
});

router.post("/coat_length", (req, res) => {
  Coat_length.add(req.body)
    .then(length => {
      res.status(200).json(length);
    })
    .catch(error => {
      res.status(500).json({ error: `Can not add coat length` });
    });
});

router.delete("/coat_length/:id", (req, res) => {
  Coat_length.remove(req.params.id)
    .then(count => {
      res.status(200).json({ message: `${count} record(s) has been deleted` });
    })
    .catch(error => {
      res.status(500).json({ error: `Can not delete this record` });
    });
});

router.put("/coat_length/:id", (req, res) => {
  Coat_length.update(req.params.id, req.body)
    .then(length => {
      res.status(200).json(length);
    })
    .catch(error => {
      res.status(500).json({ error: `Can not update the coat length` });
    });
});

module.exports = router;