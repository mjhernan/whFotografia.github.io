'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.static(__dirname + '/Public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, Accept, Accept-Version, Content-Length, Content-MDS, Content-Type, Date, X-Api-Version, X-Response-Time, XPINGOTHER, X-CSRF-Token, Authorization');
    res.setHeader('Access-Control-Allow-Credentials', true);

    next();
});

let db;
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser:true, useUnifiedTopology:true }, function(err, database) {
    if (err) {
        console.log(err);
        process.exit(1);
    }

    db = database;
    console.log('Se establecio la conexion con la base de datos');

    const server = app.listen(process.env.PORT || 8000, function() {
        let port = server.address().port;
        console.log('La aplicacion esta levantada en el puerto=[', port, ']');
    });
});

function handlerError(res, reason, message, code) {
    console.log('ERROR: ', reason);
    res.status(code || 500).json({'error': message});
};

const Cotizaciones = require('./routes/CotizacionRoute');
app.use('/api', Cotizaciones);
const Reservas = require('./routes/ReservaRoute');
app.use('/api', Reservas);
const Eventos = require('./routes/EventoRoute');
app.use('/api', Eventos);