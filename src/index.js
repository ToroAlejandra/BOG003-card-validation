import validator from "./validator.js";
console.log(validator);

document.getElementById("botonalerta").addEventListener("click", () => {
  if (document.getElementById("numbertc").value === "") {
    alert("Escribe tu numero de tarjeta para continuar");
  } else {
   validator.isValid(document.getElementById("numbertc").value);

    validator.maskify(document.getElementById("numbertc").value);
    
   let isValidCardNumber = validator.isNumber(document.getElementById("numbertc").value);
   alert(isValidCardNumber ? "Si son numeros" : "Contiene otro caracter diferente a numeros");

    
  }

});
document.getElementById("formTc").addEventListener("click", function (event) {
  event.preventDefault();
})