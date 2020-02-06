const express = require('express');
const router = express.Router();
const cityModel = require('../model/cityModel');

// GET all cities
router.get('/all', (req, res) => {
    cityModel.find({})
        .then(files => {
            res.send(files)
        })
        .catch(err => console.log(err));
});



// Test with Postman
router.get('/test', (req, res) => {
    res.send({ msg: 'Cities test route.' })
})

module.exports = router;