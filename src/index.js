import validator from "./validator.js";
console.log(validator);

document.getElementById("botonalerta").addEventListener("click", () => {
  if (document.getElementById("numberTc").value === "") {
    alert("Escribe tu numero de tarjeta para continuar");
  } else {
   validator.isValid(document.getElementById("numberTc").value);

    validator.maskify(document.getElementById("numberTc").value);
    
   let isValidCardNumber = validator.isNumber(document.getElementById("numberTc").value);
   alert(isValidCardNumber ? "Son numeros" : "Contiene otro caracter diferente a numeros");
  }

});

document.getElementById("formTc").addEventListener("click", function (event) {
  event.preventDefault();
})

document.getElementById("btn-next").addEventListener("click", () =>{
  document.getElementById("first-section").style.display = "none";
  document.getElementById("second-section").style.display = "block";
});