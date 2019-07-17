const router = require("express").Router();
const Age = require("../../models/internal-tables/ages");

router.get("/", (req, res) => {
  Age.getAll()
    .then(ages => {
      res.status(200).json(ages);
    })
    .catch(error => {
      res.status(500).json({ error: `Can not access the database` });
    });
});

router.get("/:id", verifyAgeId, (req, res) => {
  Age.getById(req.params.id)
    .then(age => {
      res.status(200).json(age);
    })
    .catch(error => {
      res.status(500).json({ error: `Can not access the age by id` });
    });
});

router.post("/", (req, res) => {
  Age.add(req.body)
    .then(age => {
      res.status(200).json(age);
    })
    .catch(error => {
      res.status(500).json({ error: `Can not add age` });
    });
});

router.delete("/:id", verifyAgeId, (req, res) => {
  Age.remove(req.params.id)
    .then(count => {
      res.status(200).json({ message: `${count} record(s) has been deleted` });
    })
    .catch(error => {
      res.status(500).json({ error: `Can not delete this record` });
    });
});

router.put("/:id", verifyAgeId, (req, res) => {
  Age.update(req.params.id, req.body)
    .then(age => {
      res.status(200).json({ message: `${age} record(s) has been updated` });
    })
    .catch(error => {
      res.status(500).json({ error: `Can not update age` });
    });
});

// Middleware
function verifyAgeId(req, res, next) {
  if (req.params.id) {
    Age.getById(req.params.id) 
    .then(age => {
      if (age) {
        next()
      } else {
        res.status(404).json({ message: `No record found with this id`})
      }
    })
    .catch(error => {
      res.status(500).json({ error: `Can not access database`})
    })
  }
}

module.exports = router;
