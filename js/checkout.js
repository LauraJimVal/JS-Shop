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
var mensajeError = document.getElementById("error"); // variable para guardar el mensaje de error

var inputs = document.forms[0].elements; // guardamos los elementos del formulario en la variable inputs

// Exercise 8
function validate() {

    for(var x = 0; x < inputs.length - 1; x++){ // Recorrido por los inputs del formulario
    // Condición para que todos los campos sean obligatorios
        while(inputs[x].value == ""){ // Mientras los campos estén vacios
          //  alert("El campo " + inputs[x].name + " debe estar relleno. Todos los campos son ////obligatorios."); // Mensaje de alerta
            inputs[x].style.borderColor = "red"; // borde del imput rojo
            mensajeError.innerHTML = "Rellena el campo " + inputs[x].name + "."; // mensaje de error para cada input
            mensajeError.style.color = "red"; // color del mensaje de error
            return false; // todavía no se envia el formulario por que no se cumplen las condiciones
        }
        if(inputs[x].value != ""){ // Si los campos estan rellenos
            inputs[x].style.borderColor = "black"; // borde del imput negro
            //mensajeError.style.visibility = "hidden"; // mensaje de error se esconde
        }

    // Condición para que todos los campos tengan almenos 3 carácteres
    }
    return true; // si las condiciones se cumplen el formulario se envia
}
    

