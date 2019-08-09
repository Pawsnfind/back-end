const router = require("express").Router();
const Search = require('../models/search/search.js');
const zipcode = require("zipcodes");

/*
router.get('/advancedSearch', getZips, (req, res) => {
    //const searchObj = {species_id : req.body.species_id, animal_status_id : req.body.animal_status_id}
    const searchObj = {species_id : req.body.species_id}
    const searchArray = {animal_status_id : req.body.animal_status_id, shelter_id : req.body.shelter_id, breed_id : req.body.breed_id, zipcodes : req.body.zips}
    Search.getBy(searchObj, searchArray)
    .then(animals => {
        console.log(req.body.zips)
        res.status(200).json(animals)
    })
    .catch( error => {
        res.status(500).json({message: "Error with search", error : error.toString()})
    })
})
*/

router.get('/initialSearch', getZips, (req,res) => {
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
    if(req.body.zipcode) {
       const zips = zipcode.radius(req.body.zipcode, req.body.radius)
       //zips.slice(0,100)
       req.body.zips = zips.slice(0,100) // limit to 100 zipcodes
       next();
    } else {
       res.status(400).json({message: "please provide a zipcode", err : error.toString()})
    }
}

module.exports = router;