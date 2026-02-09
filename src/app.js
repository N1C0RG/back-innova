const express = require('express');
const cors = require('cors');
const router = require('./router.js');
const orm = require('./models');
const cookieParser = require('cookie-parser'); 

const app = express();

const corsOptions = { 
  origin: 'http://127.0.0.1:5173', 
  credentials: true, 
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}

app.use(cors(corsOptions));
app.use(express.json());

app.use((req, res, next) => {
    req.orm = orm;
    next();
});

app.use(cookieParser()); 

app.use(router);

app.use((req, res) => {
  res.status(404).send('Ruta no encontrada');
});

app.use((err, req, res, next) => {
  console.error('Error interno:', err);
  res.status(500).send('Error interno del servidor');
});

module.exports = app;