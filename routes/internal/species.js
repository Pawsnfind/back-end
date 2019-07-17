const router = require("express").Router;
const Species = require("../../models/internal-tables/species");

router.get("/", (req, res) => {
  Species.getAll()
    .then(species => {
      res.status(200).json(species);
    })
    .catch(error => {
      res.status(500).json({ error: `Can not get species from database` });
    });
});

router.get("/:id", (req, res) => {
  Species.getById(req.params.id)
    .then(species => {
      res.status(200).json(species);
    })
    .catch(error => {
      res.status(500).json({ error: `Can not access the species by id` });
    });
});

router.post("/", (req, res) => {
  Species.add(req.body)
    .then(species => {
      res.status(200).json(species);
    })
    .catch(error => {
      res.status(500).json({ error: `Can not add species` });
    });
});

router.delete("/:id", (req, res) => {
  Species.remove(req.params.id)
    .then(count => {
      res.status(200).json({ message: `${count} record(s) has been deleted` });
    })
    .catch(error => {
      res.status(500).json({ error: `Can not delete species` });
    });
});

router.put("/:id", (req, res) => {
  Species.update(req.params.id, req.body)
    .then(species => {
      res
        .status(200)
        .json({ message: `${species} record(s) has been updated` });
    })
    .catch(error => {
      res.status(500).json({ error: `Can not update species` });
    });
});

module.exports = router;
