//DOM = Document Object Model\
/*
Variables: Espacios en memoria para almacenar datos

let: tiene un alcance (Scope) mas limitado y a nivel de un bloque especifico de codigo.
var: tiene un scope mas amplico y ademas puede ser utilizado dentro y fuera de bloques de codigo.
const: es una constante con un valor que no cambia, ademas no tiene alcance fuera de un bloque de codigo.

*/

//Expresion regular para validar si un texto tiene un numero
const REGEX_NAME = /\d/;
const REGEX_EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const REGEX_PHONE = /^9\d{8}$/;
 
// Evento al dar click al boton btnSend
document.getElementById("btnSend").addEventListener("click", () => {
    // Almacenando la informacion en una variable
    var nameUser = document.getElementById("inputName").value.trim();
    var email = document.getElementById("inputEmail").value.trim();
    var numberPhone = document.getElementById("inputPhone").value.trim();
    var gender = document.getElementById("inputGender").value;
    var address = document.getElementById("inputAddress").value.trim();

    var errores = false;

    // Validar si todos los inputs están vacíos
    if (!nameUser && !email && !numberPhone && !gender && !address) {
        errores = true;
        alert("Todos los campos están vacíos.");
        return;
    }

    //si nameUser tiene un numero
    if(nameUser.match(REGEX_NAME)){
        //nameUser si contiene un numero
         errores = true
    }

    //el signo de exclamacion delante indica una negacion es decir si el valor de email no 
    //hace match con la expresion regular vamos a ingresar al bloque de codigo 
    if(!email.match(REGEX_EMAIL)){
        errores= true
    }

    if(!numberPhone.match(REGEX_PHONE)){
        errores = true
    }

    if (!gender) { // Verifica si se seleccionó una opción de género
        errores = true;
    }

    if (!address) { // Verifica si la dirección está vacía
        errores = true;
    }

    if (errores) {
        alert("Revisa tus datos");
    } else {
        alert("Todos los datos son correctos.");
    }


    /* 
    AGREGAR 3 INPUTS Y VALIDAR LO SIGUIENTE:
    1. Validaen si todos los inputs estan vacios o no 
    2. Agregar un  INPUT para VALIDAR SI ES F/ M / O
    3. Agregar un INPUT para agregar una direccion 
    
    
    */
})