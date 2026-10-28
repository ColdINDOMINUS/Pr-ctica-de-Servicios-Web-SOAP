### `CONCLUSIONES.md`
```markdown
# Conclusiones de la Práctica de Servicios Web SOAP

El protocolo SOAP (Simple Object Access Protocol) permite el intercambio estructurado de información mediante mensajes basados en XML. El uso de un sobre XML ("Envelope") aporta un estándar rígido, seguro y fuertemente tipado para la comunicación entre sistemas distribuidos, encapsulando tanto las cabeceras de control como el cuerpo de la petición.

Por su parte, el contrato WSDL (Web Services Description Language) actúa como la especificación formal del servicio. Ayuda a que otra persona o aplicación consuma el servicio de manera automatizada, ya que detalla de forma precisa las operaciones disponibles, los tipos de datos exactos en esquemas XML y la ubicación de los endpoints HTTP. Gracias al WSDL, herramientas cliente pueden generar automáticamente código de conexión sin ambigüedades.

Existe una diferencia fundamental entre consultar un contrato WSDL e invocar una operación SOAP: la consulta al WSDL (mediante el parámetro `?wsdl` por método GET) describe la estructura y el contrato estático del servicio, mientras que la invocación de una operación es una transacción dinámica por método POST donde se envían datos reales dentro del sobre XML y se espera un resultado procesado.

En cuanto a la arquitectura del software, separar las rutas en un Router cuando una aplicación crece es una práctica indispensable para mantener la mantenibilidad, legibilidad y escalabilidad del código, evitando que el archivo principal concentre la lógica de negocio y las definiciones de los endpoints. Asimismo, el uso de un middleware centralizado para el registro (logging) de peticiones permite capturar metadatos clave (método, ruta, código de estado y tiempo de procesamiento) de forma transversal, evitando duplicar código de monitorización dentro de cada operación o servicio individual.

Finalmente, SOAP con WSDL resulta altamente conveniente en entornos empresariales, bancarios o gubernamentales donde la rigurosidad contractual, la seguridad estricta mediante WS-Security y la validación estricta de esquemas XML son obligatorias. En contraparte, una API REST con JSON es más sencilla, ligera y eficiente para aplicaciones web modernas, móviles y microservicios orientados al consumo rápido por parte de interfaces de usuario y desarrolladores independientes.