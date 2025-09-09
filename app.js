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

function setSelectionValue(newValue){
    const dropdown = document.getElementById("choice");
    const value =dropdown.value;
    if(value== "volumes"){
        document.getElementById("volumes").style.display = "block";
        document.getElementById("weights").style.display = "none";
        document.getElementById("lengths").style.display = "none";
        document.getElementById("temperatures").style.display = "none";

    }else if(value== "weights"){
        document.getElementById("volumes").style.display = "none";
        document.getElementById("weights").style.display = "block";
        document.getElementById("lengths").style.display = "none";
        document.getElementById("temperatures").style.display = "none";

    }else if(value== "lengths"){
        document.getElementById("volumes").style.display = "none";
        document.getElementById("weights").style.display = "none";
        document.getElementById("lengths").style.display = "block";
        document.getElementById("temperatures").style.display = "none";

    }else if(value== "temperatures"){
        document.getElementById("volumes").style.display = "none";
        document.getElementById("weights").style.display = "none";
        document.getElementById("lengths").style.display = "none";
        document.getElementById("temperatures").style.display = "block";

    }
}