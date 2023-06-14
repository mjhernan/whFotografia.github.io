'use strict'

const mongoose = require('mongoose');
const schemaReserva = mongoose.Schema({
    NombreUnidad: {type : String, required : true, unique : true},
});

module.exports = mongoose.model('Reserva', schemaReserva, 'Reservas');
