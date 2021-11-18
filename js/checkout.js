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
        if (inputs[x].value == "") { // Si el valor de cada input está vacío
        // if(names.value == "" || names2.value == "" || email.value == "" || password.value == "" || address.value == "" || phone.value == ""){ 
            alert("El campo " + inputs[x].name + " debe estar relleno."+"\n"+"Todos los campos son obligatorios"); // Mensaje de aviso de campos incompletos.
            return false;
        }
    //condición para que los campos tengan almenos 3 carácteres
        if (inputs[x].value < 3) { // Si el valor de cada input tiene menos de 3 carácteres
            alert("El campo " + inputs[x].name + " debe tener al menos 3 carácteres"); // Mensaje de aviso de carácteres insuficientes.
            return false;
        }

    /*
    // Validación de campos numéricos
    var x = document.forms[0];
    if(x.elements[0].matches(/^[0-9]+$/)){
        errorName = document.getElementById('errorName').style.display = "block"; 
        errorName = document.getElementById('errorName').style.color = "red";
        return false;
    }
    return true;
    */
    
    
    
}
    
}
