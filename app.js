const units = {
  lengths: ["metre", "cantimetre", "feet", "inc"],
  weights: ["kilogram", "gram", "pound"],
  temperatures: ["celcius", "fahrenheit", "kelvin"],
  volumes: ["Liter", "mililiter", "galon"],
};

function getToConverter(selectedElement) {
  const first_converter = document.getElementById("firstConverter");
  const second_converter = document.getElementById("secondConverter");

  first_converter.innerHTML = "";
  second_converter.innerHTML = "";

  const selectedValues = units[selectedElement.value];

  selectedValues.forEach((element) => {
    const option1 = document.createElement("option");
    option1.value = element;
    option1.innerText = element;

    const option2 = document.createElement("option");
    option2.value = element;
    option2.innerText = element;

    firstConverter.appendChild(option1);
    secondConverter.appendChild(option2);
  });
}

/*function setSelectionValue(newValue) {
  const dropdown = document.getElementById("choice");
  const value = dropdown.value;
  if (value == "volumes") {
    document.getElementById("volumes").style.display = "block";
    document.getElementById("weights").style.display = "none";
    document.getElementById("lengths").style.display = "none";
    document.getElementById("temperatures").style.display = "none";
  } else if (value == "weights") {
    document.getElementById("volumes").style.display = "none";
    document.getElementById("weights").style.display = "block";
    document.getElementById("lengths").style.display = "none";
    document.getElementById("temperatures").style.display = "none";
  } else if (value == "lengths") {
    document.getElementById("volumes").style.display = "none";
    document.getElementById("weights").style.display = "none";
    document.getElementById("lengths").style.display = "block";
    document.getElementById("temperatures").style.display = "none";
  } else if (value == "temperatures") {
    document.getElementById("volumes").style.display = "none";
    document.getElementById("weights").style.display = "none";
    document.getElementById("lengths").style.display = "none";
    document.getElementById("temperatures").style.display = "block";
  }
}

function convert_to_length() {
  const dropdown_length_1 = document.getElementById("length_1_select");
  const dropdown_length_2 = document.getElementById("length_2_select");
  const value_length_1 = dropdown_length_1.value;
  const value_length_2 = dropdown_length_2.value;
  var length_text_in = document.getElementById("length_1_text").value;
  var length_text_out = document
    .getElementById("length_2_text")
    .value.toString();

  //conversions with meters
  if (value_length_1 == "metre") {
    if (value_length_2 == "cantimetre") {
      //işlem formül yazılacak
      var converter_result = parseFloat(length_text_in) * 100;
      if (!isNaN(converter_result)) {
        document.getElementById("length_2_text").value = converter_result;
      }
    } else if (value_length_2 == "feet") {
      //işlemi yazılacak
      var converter_result = parseFloat(length_text_in) * 3.2808;
      if (!isNaN(converter_result)) {
        document.getElementById("length_2_text").value = converter_result;
      }
    } else if (value_length_2 == "inc") {
      //işlemi yazılacak
      var converter_result = parseFloat(length_text_in) / 0.0254;
      if (!isNaN(converter_result)) {
        document.getElementById("length_2_text").value = converter_result;
      }
    } else {
      // document.getElementById("length_text_out") = document.getElementById("length_text_in");
      document.getElementById("length_2_text").value = length_text_in;
    }
  }
  //conversions with cantimeters
  else if (value_length_1 == "cantimetre") {
    if (value_length_2 == "metre") {
      //işlem yazılacak
      var converter_result = parseFloat(length_text_in) / 100;
      if (!isNaN(converter_result)) {
        document.getElementById("length_2_text").value = converter_result;
      }
    } else if (value_length_2 == "feet") {
      //işlem yazılacak
      var converter_result = parseFloat(length_text_in) * 30.48;
      if (!isNaN(converter_result)) {
        document.getElementById("length_2_text").value = converter_result;
      }
    } else if (value_length_2 == "inc") {
      //işlem yazılacak
      var converter_result = parseFloat(length_text_in) * 0.39370079;
      if (!isNaN(converter_result)) {
        document.getElementById("length_2_text").value = converter_result;
      }
    } else {
      //cantimetre yazılacak
      document.getElementById("length_2_text").value = length_text_in;
    }
  }
  //conversions with feet
  else if (value_length_1 == "feet") {
    if (value_length_2 == "metre") {
      //işlem yazılacak
      var converter_result = parseFloat(length_text_in) / 3.2808;
      if (!isNaN(converter_result)) {
        document.getElementById("length_2_text").value = converter_result;
      }
    } else if (value_length_2 == "cantimetre") {
      //işlem yazılacak
      var converter_result = parseFloat(length_text_in) * 30.48;
      if (!isNaN(converter_result)) {
        document.getElementById("length_2_text").value = converter_result;
      }
    } else if (value_length_2 == "inc") {
      //işlem yazılacak
      var converter_result = parseFloat(length_text_in) * 12;
      if (!isNaN(converter_result)) {
        document.getElementById("length_2_text").value = converter_result;
      }
    } else {
      //feet yazılacak
      document.getElementById("length_2_text").value = length_text_in;
    }
  }
  //conversions with inc
  else if (value_length_1 == "inc") {
    if (value_length_2 == "metre") {
      //işlem yazılacak
      var converter_result = parseFloat(length_text_in) * 0.0254;
      if (!isNaN(converter_result)) {
        document.getElementById("length_2_text").value = converter_result;
      }
    } else if (value_length_2 == "cantimetre") {
      //işlem yazılacak
      var converter_result = parseFloat(length_text_in) / 0.39370079;
      if (!isNaN(converter_result)) {
        document.getElementById("length_2_text").value = converter_result;
      }
    } else if (value_length_2 == "feet") {
      //işlem yazılacak
      var converter_result = parseFloat(length_text_in) / 12;
      if (!isNaN(converter_result)) {
        document.getElementById("length_2_text").value = converter_result;
      }
    } else {
      //inc yazılacak
      document.getElementById("length_2_text").value = length_text_in;
    }
  }
}

function convert_to_weight() {
  const dropdown_weight_1 = document.getElementById("weight_1_select");
  const dropdown_weight_2 = document.getElementById("weight_2_select");
  const value_weight_1 = dropdown_weight_1.value;
  const value_weight_2 = dropdown_weight_2.value;
  var weight_text_in = document.getElementById("weight_1_text").value;
  var weight_text_out = document
    .getElementById("weight_2_text")
    .value.toString();
//conversions with kilogram
  if (value_weight_1 == "kilogram") {
    if (value_weight_2 == "gram") {
      //işlem yazılacak
      var converter_result_w = parseFloat(weight_text_in) * 1000;
      if (!isNaN(converter_result_w)) {
        document.getElementById("weight_2_text").value = converter_result_w;
      }
    } else if (value_weight_2 == "pound") {
      //işlem yazılacak
      var converter_result_w = parseFloat(weight_text_in) * 2.2046226;
      if (!isNaN(converter_result_w)) {
        document.getElementById("weight_2_text").value = converter_result_w;
      }
    } else {
      document.getElementById("weight_2_text").value = weight_text_in;
    }
  }
//conversions with gram
  else if (value_weight_1 == "gram") {
    if (value_weight_2 == "kilogram") {
      var converter_result_w = parseFloat(weight_text_in) / 1000;
      if (!isNaN(converter_result_w)) {
        document.getElementById("weight_2_text").value = converter_result_w;
      }
    } else if (value_weight_2 == "kilogram") {
      var converter_result_w = parseFloat(weight_text_in) * 0.0220462262;
      if (!isNaN(converter_result_w)) {
        document.getElementById("weight_2_text").value = converter_result_w;
      }
    } else {
      document.getElementById("weight_2_text").value = weight_text_in;
    }
  } else if (value_weight_1 == "pound") {
    //işlem
    if(value_weight_2 == "kilogram"){
         var converter_result_w = parseFloat(weight_text_in) * 0.45359237;
      if (!isNaN(converter_result_w)) {
        document.getElementById("weight_2_text").value = converter_result_w;
      }
    }else if(value_weight_2 == "gram"){
         var converter_result_w = parseFloat(weight_text_in) * 453.59237;
      if (!isNaN(converter_result_w)) {
        document.getElementById("weight_2_text").value = converter_result_w;
      }
    }else{
      document.getElementById("weight_2_text").value = weight_text_in;

    }
  }
]
*/
