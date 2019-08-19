const router = require("express").Router();
const Search = require('../models/search/search.js');
const zipcode = require("zipcodes");


router.post('/advancedSearch', getZips, (req, res) => {
    // console.log(req.body)
    const searchObj = {
        is_male : req.body.is_male,
        species_id : req.body.species_id,
        breed_id : req.body.breed_id,
        size_id : req.body.size_id,
        age_id : req.body.age_id,
        coat_length_id : req.body.coat_length_id,
        zips : req.body.zips
    }
    Search.advancedSearch(searchObj)
    .then(animals => {
        console.log(req.body.zips)
        res.status(200).json(animals)

    })
    .catch( error => {
        res.status(500).json({message: "Error with search", error : error.toString()})
    })
})


router.post('/initialSearch', getZips, (req,res) => {
    const searchObj = {species_id : req.body.species_id, zips : req.body.zips}
    Search.initialSearch(searchObj)
    .then(animals => {
        res.status(200).json(animals)
    })
    .catch( error => {
        res.status(500).json({message: "Error with search", error : error.toString()})
    })
})

function getZips( req, res, next) {
    // console.log(req.body)
    if(req.body.zipcode) {
       const zips = zipcode.radius(req.body.zipcode, req.body.radius)
       console.log(zips)
    //    zips.slice(0,100)
       req.body.zips = zips.slice(0,100) // limit to 100 zipcodes
       next();
    } else {
       res.status(400).json({message: "please provide a zipcode"})
    }
}

module.exports = router;