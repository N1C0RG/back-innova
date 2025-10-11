const express = require("express");
const router = new express.Router();
const { Op } = require('sequelize');

// Obtener todos los delitos
router.get('/', async(req, res) => {
    try{
        const crimes = await req.orm.Crimes.findAll();
        if(crimes){
            res.status(200).json(crimes);
        }
        else{
            res.status(404).json({error: 'Crimes not found'});
        }
    }
    catch(error){
        console.log(error.message);
        res.status(400).json({error: error.message});
    }
});

module.exports = router;