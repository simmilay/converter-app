/*  import { transformations } from './formula.js'; */

const units = {
  lengths: ["Metre", "Cantimetre", "Feet", "Inc"],
  weights: ["Kilogram", "Gram", "Pound"],
  temperatures: ["Celcius", "Fahrenheit", "Kelvin"],
  volumes: ["Litre", "Mililitre", "Galon"],
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
  console.log(transformations);

function make_conversion() {
  const input1 = document.getElementById("enteredValue");
  var inputValue1 = input1.value;

  const first_option = document.getElementById("firstConverter");
  const first_optionValue = first_option.value;
  const second_option = document.getElementById("secondConverter");
  /* const second_optionValue = second_option.value; */
 // const calculator  = transformations.find(unitsValue => unitsValue.)

  /* let cal = transformations.find(
    (x) => x.fromKey == first_optionValue && x.toKey == second_optionValue
  ).calculator;
  if (cal) {
    var converter_result = cal(parseFloat(inputValue1));
    document.getElementById("result").value = converter_result;
  } */

    let cal = transformations.find(
    (x) => x.fromKey == first_optionValue).operation.find((c) => c.toKey).calculator(inputValue1)
    console.log(cal)
  if (cal) {
    var converter_result = cal(parseFloat(inputValue1));
    document.getElementById("result").value = converter_result;
  }

  console.log("result");

}
