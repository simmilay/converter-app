 const transformations = [

    //Meter conversions
  {
    fromKey: "Metre",
    toKey : "Cantimetre",
    calculator: (value) => {
          return value / 100;
        },
    /* operation: [
      {
        toKey: "Cantimetre",
        
      },
      {
        toKey: "Feet",
        calculator: (value) => {
          return value * 0.3048;
        },
      },
      {
        toKey: "Inc",
        calculator: (value) => {
          return value * 0.0254;
        },
      },
    ], */
  },

  //Cantimeter conversions
  {
    fromKey: "Cantimetre",
    operation: [
      {
        toKey: "Metre",
        calculator: (value) => {
          return value * 100;
        },
      },
      {
        toKey: "Feet",
        calculator: (value) => {
          return value * 30.48;
        },
      },
      {
        toKey: "Inc",
        calculator: (value) => {
          return value * 2.54;
        },
      },
    ],
  },

  //Feet converisons
  {
    fromKey: "Metre",
    operation: [
      {
        toKey: "Cantimetre",
        calculator: (value) => {
          return value * 0.032808;
        },
      },
      {
        toKey: "Metre",
        calculator: (value) => {
          return value * 3.2808;
        },
      },
      {
        toKey: "Inc",
        calculator: (value) => {
          return value * 0.08333;
        },
      },
    ],
  },

  //kilogram conversions
  {
    fromKey: "Kilogram",
    operation: [
      {
        toKey: "gram",
        calculator: (value) => {
          return value / 1000;
        },
      },
      {
        toKey: "Pound",
        calculator: (value) => {
          return value * 0.453592;
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
          return value * 1000;
        },
      },
      {
        toKey: "Pound",
        calculator: (value) => {
          return value * 453.5923;
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
          return ((value - 32) * 5) / 9;
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
          return (parseFloat(Value) * 9) / 5 + 32;
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
        fromKey: "Mililitre",
        calculator: (value) => {
          return value / 1000;
        },
      },
      {
        fromKey: "Galon",
        calculator: (value) => {
          return value * 3.7854118;
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
          return value * 1000;
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
