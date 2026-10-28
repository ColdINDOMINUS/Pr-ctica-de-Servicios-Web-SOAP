const requestLogger = (req, res, next) => {
  const start = process.hrtime();

  res.on('finish', () => {
    const diff = process.hrtime(start);
    const timeInMs = (diff[0] * 1e3 + diff[1] * 1e-6).toFixed(3);
    console.log(`[SOAP-LOGGER] ${req.method} ${req.originalUrl} | Status: ${res.statusCode} | Time: ${timeInMs} ms`);
  });

  next();
};

module.exports = requestLogger;