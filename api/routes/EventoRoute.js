'use strict';

const express = require('express');
const router = express.Router();
const Evento = require('../models/EventoModel');


router.post('/RegistrarEvento', (req, res)=>{
    let body = req.body;
    let nuevoEvento = new Evento({
        NombreUnidad : body.NombreUnidad
    });
    nuevoEvento.save((err, EventoDB)=>{
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
                EventoDB
            });
        }
    });
});

module.exports = router;