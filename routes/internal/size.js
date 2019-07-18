const router = require("express").Router();
const Size = require('../../models/internal-tables/size')

router.get('/size', (req, res) => {
    Size.getAll()
    .then(sizes=>{
     res.status(200).json(sizes)})
    .catch(error=>{
    res.status(500).json({ error: `Can not get sizes from database` })
});
});

router.get('/size/:id', (req, res) => {
    Size.getById(req.params.id)        
    .then(size=>{
     res.status(200).json(size)})
    .catch(error=>{
    res.status(500).json({ error: `Can not access the size by id` })
});
});

router.post('/size', (req, res) => {
  Size.add(req.body)
    .then(size=>{
     res.status(200).json(size)})
    .catch(error=>{
    res.status(500).json({ error: `Can not add size` })
});
});

router.delete('/:id', (req, res) => {
    Size.remove(req.params.id)  
    .then(count=>{
     res.status(200).json({ message: `${count} record(s) has been deleted` })})
    .catch(error=> {
    res.status(500).json({ error: `Can not delete size` })
});
});

router.put('/:id', (req, res) => {
    Size.update(req.params.id, req.body)
    .then(size=>{
     res.status(200).json({ message: `${size} record(s) has been updated` })})
    .catch(error=>{
    res.status(500).json({ error: `Can not update size` })
});
});
module.exports = router;