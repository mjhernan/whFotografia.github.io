'use strict';

const express = require('express');
const router = express.Router();
const Reserva = require('../models/ReservaModel');


router.post('/RegistrarReserva', (req, res)=>{
    let body = req.body;
    let nuevaReserva = new Reserva({
        NombreUnidad : body.NombreUnidad
    });
    nuevaReserva.save((err, ReservaDB)=>{
        if (err){
            res.json({
                result: false,
                msj: 'TBD',
                err
            });  
        }else{
            res.json({
                result : true,
                msj : 'TBD',
                ReservaDB
            });
        }
    });
});

module.exports = router;