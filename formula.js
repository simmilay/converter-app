const transformations = [
  //Meter conversions
  {
    fromKey: "Metre",
    operation: [
      {
        toKey: "Santimetre",
        calculator: (value) => {
          return value * 100;
        },
      },
      {
        toKey: "Feet",
        calculator: (value) => {
          return value * 3.280839;
        },
      },
      {
        toKey: "Inc",
        calculator: (value) => {
          return value * 39.37;
        },
      },
       {
        toKey: "Metre",
        calculator: (value) => {
          return value;
        },
      },
      
    ],
  },

  //Cantimeter conversions
  {
    fromKey: "Santimetre",
    operation: [
      {
        toKey: "Metre",
        calculator: (value) => {
          return value *0.01;
        },
      },
      {
        toKey: "Feet",
        calculator: (value) => {
          return value * 0.0328;
        },
      },
      {
        toKey: "Inc",
        calculator: (value) => {
          return value * 0.3937;
        },
      },
    ],
  },

  //Feet converisons
  {
    fromKey: "Feet",
    operation: [
      {
        toKey: "Cantimetre",
        calculator: (value) => {
          return value * 30.48;
        },
      },
      {
        toKey: "Metre",
        calculator: (value) => {
          return value * 0.3048;
        },
      },
      {
        toKey: "Inc",
        calculator: (value) => {
          return value * 12;
        },
      },
    ],
  },

  //kilogram conversions
  {
    fromKey: "Kilogram",
    operation: [
      {
        toKey: "Gram",
        calculator: (value) => {
          return value *1000;
        },
      },
      {
        toKey: "Pound",
        calculator: (value) => {
          return (value * 2.20462);
        },
      },
      {
        toKey: "Kilogram",
        calculator: (value) => {
          return value;
        },
      },
    ],
  },

  //gram conversions
  {
    fromKey: "Gram",
    operation: [
      {
        toKey: "Kilogram",
        calculator: (value) => {
          return value * 0.001;
        },
      },
      {
        toKey: "Pound",
        calculator: (value) => {
          return value * 0.00220462;
        },
      },
    ],
  },

  //Pound conversion
  {
    fromKey: "Pound",
    operation: [
      {
        toKey: "Kilogram",
        calculator: (value) => {
          return value * 2.2046226;
        },
      },
      {
        toKey: "Gram",
        calculator: (value) => {
          return value * 0.0022042;
        },
      },
    ],
  },

  //Celcius conversion
  {
    fromKey: "Celcius",
    operation: [
      {
        toKey: "Kelvin",
        calculator: (value) => {
          return parseFloat(value) + 273.15;
        },
      },
      {
        toKey: "Fahrenheit",
        calculator: (value) => {
          return (value * 9/5) + 32;
        },
      },
      {
        toKey: "Celcius",
        calculator: (value) => {
          return value;
        },
      },
    ],
  },

  //Kelvin canversion
  {
    fromKey: "Kelvin",
    operation: [
      {
        toKey: "Celcius",
        calculator: (value) => {
          return value - 273.15;
        },
      },
      {
        toKey: "Fahrenheit",
        calculator: (value) => {
          return ((parseFloat(value) - 32) * 5) / 9 + 273.15;
        },
      },
    ],
  },

  //Fahrenheit Coversion
  {
    fromKey: "Fahrenheit",
    operation: [
      {
        toKey: "Celcius",
        calculator: (value) => {
          return (parseFloat(value) * 9) / 5 + 32;
        },
      },
      {
        toKey: "Kelvin",
        calculator: (value) => {
          return ((parseFloat(value) - 273.15) * 9) / 5 + 32;
        },
      },
    ],
  },

  //Litre conversion
  {
    fromKey: "Litre",
    operation: [
      {
        toKey: "Mililitre",
        calculator: (value) => {
          return value * 1000;
        },
      },
      {
        toKey: "Galon",
        calculator: (value) => {
          return value * 0.264172;
        },
      },
      {
        toKey: "Litre",
        calculator: (value) => {
          return value;
        },
      },
    ],
  },

  //Mililitre conversion
  {
    fromKey: "Mililitre",
    operation: [
      {
        toKey: "Litre",
        calculator: (value) => {
          return value *0.001;
        },
      },
      {
        toKey: "Galon",
        calculator: (value) => {
          return value * 3785.41118;
        },
      },
    ],
  },

  //Galon conversion
  {
    fromKey: "Galon",
    operation: [
      {
        toKey: "Litre",
        calculator: (value) => {
          return value * 0.264172;
        },
      },
      {
        toKey: "Mililitre",
        calculator: (value) => {
          return value * 0.000264172;
        },
      },
    ],
  },
];
