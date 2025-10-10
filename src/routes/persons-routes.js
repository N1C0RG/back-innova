const express = require("express");
const router = new express.Router();
const { Op } = require('sequelize');

// Crear persona
router.post('/', async(req, res) => {
    try{
        const person = await req.orm.Persons.create(req.body);
        res.status(201).json(person);
    }
    catch(error){
        console.log(error.message);
        res.status(400).json({error: error.message});
    }
});

// Consultar persona por id
router.get('/:id', async(req, res) => {
    try{
        const person = await req.orm.Persons.findByPk(req.params.id);
        if(person){
            res.status(200).json(person);
        }
        else{
            res.status(404).json({error: 'Person not found'});
        }
    }
    catch(error){
        console.log(error.message);
        res.status(400).json({error: error.message});
    }
});

// Consultar un número {limit} de personas de la página {page}
router.get('/', async(req, res) => {

    let {page, limit} = req.query; 
    if (!limit){ 
        limit = 25;
    }
    if (!page) {
        page = 1;
    }

    try{
        const persons = await req.orm.Persons.findAll({
            limit: limit,
            offset: (page - 1) * limit || 0
        })
        if(persons){
            res.status(200).json(persons);
        }
        else{
            res.status(404).json({error: 'Persons not found'});
        }
    }
    catch(error){
        console.log(error.message);
        res.status(500).json({error: error.message});
    }
})

module.exports = router;

// Consultar persona por rut
router.get('/rut/:rut', async(req, res) => {
    try{
        const person = await req.orm.Persons.findOne({
            where: {
                rut: req.params.rut
            }
        });
        if(person){
            res.status(200).json(person);
        }
        else{
            res.status(404).json({error: 'Person not found'});
        }
    }
    catch(error){
        console.log(error.message);
        res.status(400).json({error: error.message});
    }
});