// Get the input fields
var password = document.querySelector(".password");
var phone = document.querySelector(".phone");
var names = document.querySelector(".names");
var names2 = document.querySelector(".names2");
var email = document.querySelector(".email"); // ubicamos el input con clase "email"
var address= document.querySelector(".address"); // ubicamos el input con clase "address"

// Get the error elements
var errorPassword = document.getElementById("errorPassword");
var errorName = document.getElementById('errorName');  
var errorPhone = document.getElementById('errorPhone');  

var inputs = document.forms[0].elements; // guardamos los elementos del formulario en la variable inputs
// Exercise 8
function validate() {
    var condicion_ok = true;
    for(var x = 0; x < inputs.length - 1; x++){ // Recorrido por los inputs del formulario
    // Condición para que todos los campos sean obligatorios
        if (inputs[x].value == "") { // Si el valor de cada input está vacío
        // if(names.value == "" || names2.value == "" || email.value == "" || password.value == "" || address.value == "" || phone.value == ""){ 
            condicion_ok = false;
            alert("El campo " + inputs[x].name + " debe estar relleno."+"\n"+"Todos los campos son obligatorios"); // Mensaje de aviso de campos incompletos.
        }
    //condición para que los campos tengan almenos 3 carácteres
        
    }
}
