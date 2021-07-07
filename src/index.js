import validator from "./validator.js";
console.log(validator);


var popUp = document.getElementById("myPopup");

document.getElementById("btnverificar").addEventListener("click", () => {
  
  if (document.getElementById("numbertc").value === "") {
    popUp.innerHTML="Escribe tu numero de tarjeta para continuar";
    popUp.classList.toggle("show");
    
  } else {
   let isValidCreditCard = validator.isValid(document.getElementById("numbertc").value);
   
    let maskifyNumber = validator.maskify(document.getElementById("numbertc").value);
    
   let isValidCardNumber = validator.isNumber(document.getElementById("numbertc").value);
   


  if (isValidCardNumber) {
    
      if (isValidCreditCard) {
      document.getElementById("mymodalcorrect").style.display = "block";
      document.getElementById("imgcorrect").src="./Img/errorvalidcard.svg"
      document.getElementById("validcard").innerText="Tu tarjeta \n "+ maskifyNumber + "  es valida,";
      document.getElementById("msjvalid").innerText="puedes continuar con tu compra";
          setTimeout(function(){ 
            document.getElementById("mymodalcorrect").style.display = "none"; 
            }, 3000);
      
    } else {
      document.getElementById("mymodalcorrect").style.display = "block";
      document.getElementById("imgcorrect").src="./Img/errorvalidcard.svg";
      document.getElementById("validcard").innerText="Tu tarjeta \n "+ maskifyNumber + "  es invalida,";
      document.getElementById("msjvalid").innerText="intentalo de nuevo";
          setTimeout(function(){ 
            document.getElementById("mymodalcorrect").style.display = "none"; 
            }, 3000);

    }

    } else {
      popUp.innerHTML="Digita solo numeros";
    popUp.classList.toggle("show");
    }
//alert(isValidCardNumber ? "Si son numeros" : "Contiene otro caracter diferente a numeros"); operador ternario

    }


});

document.getElementById("btn-next").addEventListener("click", () => {

  document.getElementById("first-section").style.display = "none";
  document.getElementById("second-section").style.display = "block";
  document.getElementById("hder").style.display = "block";
document.getElementById("bdy").style.background = "#F9F8E8";
document.getElementById("fter").style.display = "block";
});

document.getElementById("btnlimpiar").addEventListener("click", () => {
  document.getElementById("numbertc").value = "";
  //document.getElementsByTagName("input")[0].value = ""; 

 });
