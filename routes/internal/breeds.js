const router = require('express').Router
const Breeds = require('../../models/internal-tables/breeds')

router.get('/breeds', (req,res) => {
    Breeds.getAll()
    .then(breeds => {
        res.status(200).json(breeds)
    })
    .catch( error => {
        res.status(500).json({ error: `Can not access the database`})
    })
})

router.get('/breeds/:id', (req, res) =>{
    Breeds.getById(req.params.id)
    .then(breed => {
        res.status(200).json(breed)
    })
    .catch(error => {
        res.status(500).json({error: `Can not access the breed by id`})
    })
})

router.get('/breeds/species/:id', (req, res) => {
    Breeds.getBySpeciesId(req.params.id)
    .then(breeds => {
        res.status(200).json(breeds)
    })
    .catch(error => {
        res.status(500).json({error: `Could not get breeds`})
    }
    )
})

router.post('/breeds', (req, res) => {
    Breeds.add(req.body)
    .then(breed =>{
        res.status(200).json(breed)
    })
    .catch(error =>{
        res.status(500).json({ error: `Could not add breed`})
    })
})

router.put('/breeds/:id', (req, res) => {
    Breeds.update(req.params.id, req.body)
    .then(breed => {
        res.status(200).json(breed)
    })
    .catch(error=> 
        {res.status(500).json({ error: `Can not update breed` })
    })
});

router.delete('/breeds/:id', (req, res) =>{
    Breeds.remove(req.params.id)
    .then(count => {
        res.status(200).json({ message: `${count} record(s) has been deleted`})})
    .catch(error=> {
        res.status(500).json({ error: `Can not delete this record` })
    });
})


module.exports = router