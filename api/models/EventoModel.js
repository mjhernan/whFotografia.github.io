'use strict'

const mongoose = require('mongoose');
const schemaEvento = mongoose.Schema({
    Nombre:     {type : String, required : true, unique : false},
    Fecha:      {type: Date, required: true, unique: false},
    Tipo:       {type: String, require: true, unique: false},
    Lugar:      {type: String, required: true, unique: false},
    Pago:       {type: String, require: true, unique: false}
});

module.exports = mongoose.model('Evento', schemaEvento, 'Eventos');
