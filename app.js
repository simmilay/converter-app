/*const choice = document.getElementById("choice")
const lengths =document.getElementsById("lengths")
const weights =document.getElementsById("weights")
const temperatures =document.getElementsById("temperatures")
const volumes =document.getElementsById("volumes")
*/

/* choice.addEventListener("change" , function (event)
{
    if(event.target.value == 'lengths' ){
        lengths.style.display == "block" 
        weights.style.display == "none"
        temperatures.style.display =="none"
        volumes.style.display == "none"
    }else if(event.target.value == 'weights'){
        lengths.style.display == "none" 
        weights.style.display == "block"
        temperatures.style.display =="none"
        volumes.style.display == "none"
    }else if(event.target.value == 'temperatures'){
        lengths.style.display == "none" 
        weights.style.display == "none"
        temperatures.style.display =="block"
        volumes.style.display == "none"
    }else if(event.target.value == 'weights'){
        lengths.style.display == "none" 
        weights.style.display == "none"
        temperatures.style.display =="none"
        volumes.style.display == "block"
    }

});
 */

function setSelectionValue(newValue) {
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
