const express = require('express');
const dotenv = require("dotenv");

const persons = require('./routes/persons-routes.js');
const crimes = require('./routes/crimes-routes.js');
const records = require('./routes/record-routes.js');
const users = require('./routes/user-routes.js');

dotenv.config();
//====================================================================================

const router = new express.Router();

router.use('/persons', persons);
router.use('/crimes', crimes);
router.use('/records', records);
router.use('/users', users);

module.exports = router;