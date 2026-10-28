const express = require('express');
const requestLogger = require('./src/middleware/logger');
const { router, setupSoapServices } = require('./src/routes/soapRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// 1. Aplicar middleware de registro antes de las rutas SOAP
app.use(requestLogger);

// 2. Montar el Router general
app.use(router);

// Ruta de bienvenida / estado
app.get('/', (req, res) => {
  res.send(`
    <h1>Servicios Web SOAP con Express</h1>
    <p>Endpoints disponibles:</p>
    <ul>
      <li><a href="/soap/conversiones?wsdl">/soap/conversiones?wsdl</a></li>
      <li><a href="/soap/geometria?wsdl">/soap/geometria?wsdl</a></li>
    </ul>
  `);
});

// 3. Iniciar servidor y servicios SOAP
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
  setupSoapServices(app);
});