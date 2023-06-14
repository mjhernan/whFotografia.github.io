'use strict'

const mongoose = require('mongoose');
const schemaCotizacion = mongoose.Schema({
    NombreUnidad: {type : String, required : true, unique : true},
});

module.exports = mongoose.model('Cotizacion', schemaCotizacion, 'Cotizaciones');
