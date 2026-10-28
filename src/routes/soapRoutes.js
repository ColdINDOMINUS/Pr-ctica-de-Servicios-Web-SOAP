const express = require('express');
const soap = require('soap');
const fs = require('fs');
const path = require('path');

const conversionesService = require('../services/conversionesService');
const geometriaService = require('../services/geometriaService');

const router = express.Router();

// Función para montar los servicios SOAP cuando Express inicie
function setupSoapServices(app) {
  const conversionesWsdl = fs.readFileSync(path.join(__dirname, '../wsdl/conversiones.wsdl'), 'utf8');
  const geometriaWsdl = fs.readFileSync(path.join(__dirname, '../wsdl/geometria.wsdl'), 'utf8');

  soap.listen(app, '/soap/conversiones', conversionesService, conversionesWsdl, () => {
    console.log('[SOAP] Servicio Conversiones inicializado en /soap/conversiones?wsdl');
  });

  soap.listen(app, '/soap/geometria', geometriaService, geometriaWsdl, () => {
    console.log('[SOAP] Servicio Geometria inicializado en /soap/geometria?wsdl');
  });
}

module.exports = { router, setupSoapServices };