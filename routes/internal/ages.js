const router = require("express").Router;
const Age = require("../../models/internal-tables/ages");

router.get("/ages", (req, res) => {
  Age.getAll()
    .then(ages => {
      res.status(200).json(ages);
    })
    .catch(error => {
      res.status(500).json({ error: `Can not access the database` });
    });
});

router.get("/ages/:id", (req, res) => {
  Age.getById(req.params.id)
    .then(age => {
      res.status(200).json(age);
    })
    .catch(error => {
      res.status(500).json({ error: `Can not access the age by id` });
    });
});

router.post("/ages", (req, res) => {
  Age.add(req.body.age)
    .then(age => {
      res.status(200).json(age);
    })
    .catch(error => {
      res.status(500).json({ error: `Can not add age` });
    });
});

router.delete("/ages/:id", (req, res) => {
  Age.remove(req.params.id)
    .then(count => {
      res.status(200).json({ message: `${count} record(s) has been deleted` });
    })
    .catch(error => {
      res.status(500).json({ error: `Can not delete this record` });
    });
});

router.put("/ages/:id", (req, res) => {
  Age.update(req.params.id, req.body)
    .then(age => {
      res.status(200).json(age);
    })
    .catch(error => {
      res.status(500).json({ error: `Can not update age` });
    });
});

module.exports = router;
