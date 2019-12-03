const express = require('express')
const router = express.Router();
const City = require('../Schemas/City.js')

router.get('/', async (req, res) => {
    var ciudadesFromRoutes = await City.find(function (err, allCities) {
        if (err) return console.error(err);
        console.log("Todas las ciudades desde City.find");
    })
    res.json({ ciudadesFromRoutes })
});


router.get('/:id', async (req, res) => {
    var singleCityFromRoutes = await City.find({ "title": req.params.id }, function (err, singleCity) {
        if (err) return console.error(err);
        console.log("Printing singleCity");
    })
    res.json({ singleCityFromRoutes })
});

module.exports = router;