const express = require('express');
const cors = require('cors');
const router = require('./router.js');
const orm = require('./models');

const app = express();

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
    req.orm = orm;
    next();
});

app.use(router);

app.use((err, req, res, next) => {
    res.status(404).send('ruta no encontrada');
});

module.exports = app;