//dynamic selected menu
const units = {
  lengths: ["Metre", "Santimetre", "Feet", "Inc"],
  weights: ["Kilogram", "Gram", "Pound"],
  temperatures: ["Celcius", "Fahrenheit", "Kelvin"],
  volumes: ["Litre", "Mililitre", "Galon"],
};
function rule() {
  const firstOption = document.getElementById("firstConverter").value;
  const secondOption = document.getElementById("secondConverter");

  for (let i = 0; i < secondOption.options.length; i++) {
    const option = secondOption.options[i];
    const isSame = option.value === firstOption;
    option.disabled = isSame;
  }
}
function getToConverter(selectedElement) {
  const first_converter = document.getElementById("firstConverter");
  const second_converter = document.getElementById("secondConverter");
  const input = document.getElementById("enteredValue");
  const output = document.getElementById("result");

  input.value = "";
  output.value = "";

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
  rule();
  first_converter.addEventListener("change", rule);
}

//part of the tranformation

function keyPressCheck(event) {
  const kelvinSelection = document.getElementById("firstConverter");
  const ksValue = kelvinSelection.value;

  const entered  = document.getElementById("enteredValue");
  const enteredValue = entered.value;
  const valueIndex = enteredValue.length; 

  console.log(event.key);
  if (event.key == "-" && ksValue === "Kelvin") {
    event.preventDefault();
  }
  if(event.key == "-" && valueIndex >= 1){
    event.preventDefault();

  }
}

function make_conversion() {

  const input = document.getElementById("enteredValue");
  var inputValue = input.value;
  const first_option = document.getElementById("firstConverter");
  const first_optionValue = first_option.value;
  const second_option = document.getElementById("secondConverter");
  const second_optionValue = second_option.value;


  let cal = transformations
    .find((x) => x.fromKey == first_optionValue)
    .operation.find((c) => c.toKey == second_optionValue)
    .calculator(inputValue);

  if (cal) {
    var converter_result = cal;
    document.getElementById("result").value = converter_result;
  }
}

function changeValue() {
  const optionFirst = document.getElementById("firstConverter").value;
  const optionSecond = document.getElementById("secondConverter").value;
  document.getElementById("secondConverter").value = optionFirst;
  document.getElementById("firstConverter").value = optionSecond;

  const input = document.getElementById("enteredValue");
  const output = document.getElementById("result");

  input.value = "";
  output.value = "";
}
