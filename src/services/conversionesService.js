module.exports = {
  ConversionesService: {
    ConversionesPort: {
      CelsiusAFahrenheit: function (args) {
        const celsius = parseFloat(args.celsius);
        const fahrenheit = (celsius * 9) / 5 + 32;
        return { fahrenheit };
      },
      KilometrosAMillas: function (args) {
        const kilometros = parseFloat(args.kilometros);
        const millas = kilometros * 0.621371;
        return { millas };
      }
    }
  }
};