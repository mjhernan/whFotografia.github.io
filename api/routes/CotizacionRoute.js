'use strict';

const express = require('express');
const router = express.Router();
const Cotizacion = require('../models/CotizacionModel');


router.post('/RegistrarCotizacion', (req, res)=>{
    let body = req.body;
    let nuevaCotizacion = new Cotizacion({
        NombreUnidad : body.NombreUnidad
    });
    nuevaCotizacion.save((err, CotizacionDB)=>{
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
                CotizacionDB
            });
        }
    });
});

module.exports = router;