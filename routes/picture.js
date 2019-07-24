const router = require("express").Router();
const pictures = require('../models/pictures');

router.get('/:id', (req, res) => {
    picture.getById(req.params.id)
        .then(picture => {
            if (picture)
                res.status(200).json(picture)
            else
                res.status(404).json({message: "Image not found"});
        })
        .catch(error => {
            res.status(500).json({ error: 'Error retrieving picture. ' + error.toString() })
        })
});

router.get('/image/:id', (req, res) => {
    picture.getByImgId(req.params.id)
        .then(picture => {
            if (picture)
                res.status(200).json(picture)
            else
                res.status(404).json({message: "Image not found"});
        })
        .catch(error => {
            res.status(500).json({ error: 'Error retrieving picture. ' + error.toString() })
        })
});

router.get('/animal/:id', (req, res) => {
    picture.getByImgId(req.params.id)
        .then(picture => {
            if (picture.length > 0)
                res.status(200).json(picture)
            else
                res.status(404).json({message: "No images found"});
        })
        .catch(error => {
            res.status(500).json({ error: 'Error retrieving pictures. ' + error.toString() })
        })
});

router.delete('/:id', (req, res) => {
    picture.remove(req.params.id)
        .then(response => {
                res.status(200).json(response)
        })
        .catch(error => {
            res.status(500).json({ error: 'Error removing pictures. ' + error.toString() })
        })
});

router.post('/', (req, res) => {

    picture.add(req.body)
        .then(response => {
                res.status(200).json(response)
        })
        .catch(error => {
            res.status(500).json({ error: 'Error removing pictures. ' + error.toString() })
        })
});

 async uploadPhoto = (photo) => {
    
}