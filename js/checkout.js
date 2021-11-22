// Get the input fields
var password = document.querySelector(".password").value;
var phone = document.querySelector(".phone").value;
var names = document.querySelector(".names").value;
var names2 = document.querySelector(".names2").value;
var email = document.querySelector(".email").value; 
var address= document.querySelector(".address").value;

// Get the error elements
var errorPassword = document.getElementById("errorPassword");
var errorName = document.getElementById('errorName');  
var errorPhone = document.getElementById('errorPhone');  

var inputs = document.forms[0].elements; // guardamos los elementos del formulario en la variable inputs

// Exercise 8
function validate() {

    for(var x = 0; x < inputs.length - 1; x++){ // Recorrido por los inputs del formulario
    // Condición para que todos los campos sean obligatorios
        if(inputs[x].value == ""){
            alert("El campo " + inputs[x].name + " debe estar relleno");
            document.querySelector("input").style.borderColor = "red";
            return false;
        }else{
            document.querySelector("input").style.borderColor = "black";
        }
    }
    return true;
}
    

