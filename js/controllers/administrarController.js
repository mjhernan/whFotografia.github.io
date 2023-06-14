'use strict';

let tablaEventos = document.getElementById('tablaEventos');
let tbodyEventos = document.getElementById('tbodyEventos');
let tablaReservas = document.getElementById('tablaReservas');
let tbodyReservas = document.getElementById('tbodyReservas');
let tablaCotizaciones = document.getElementById('tablaCotizaciones');
let tbodyCotizaciones = document.getElementById('tbodyCotizaciones');

tablaEventos.style.display = 'none';
tablaReservas.style.display = 'none';
tablaCotizaciones.style.display = 'none';

function DisplayTablaEventos() {
    ToggleDisplay(tablaEventos);
};

function DisplayTablaReservas() {
    ToggleDisplay(tablaReservas);
};

function DisplayTablaCotizaciones() {
    ToggleDisplay(tablaCotizaciones);
};

function ToggleDisplay(pTableElement) {
    if (pTableElement.style.display == "none") {
        pTableElement.style.display = 'block';
    } else {
        pTableElement.style.display = 'none';
    }
};