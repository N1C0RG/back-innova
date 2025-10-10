const express = require('express');
const dotenv = require("dotenv");

const persons = require('./routes/persons-routes.js');

dotenv.config();
//====================================================================================

const router = new express.Router();

router.use('/persons', persons);

module.exports = router;