const express = require("express");
const router = new express.Router();
const { Op } = require('sequelize');

// Crear antecedente
router.post('/', async(req, res) => {
    try{
        const record = await req.orm.Record.create(req.body);
        res.status(201).json(record);
    }
    catch(error){
        console.log(error.message);
        res.status(400).json({error: error.message});
    }
});