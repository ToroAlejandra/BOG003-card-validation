import validator from "./validator.js";
console.log(validator);

var popup = document.getElementById("myPopup");

document.getElementById("btn-verificar").addEventListener("click", () => {
  if (document.getElementById("numberTc").value === "") {
    console.log("Escribe tu numero de tarjeta para continuar");
    
    popup.innerHTML = "Escribe tu número de tarjeta para continuar";
    popup.classList.toggle("show");
    showPopUp("Escribe tu número de tarjeta para continuar");
  } else {
    let isValidCreditCard = validator.isValid(document.getElementById("numberTc").value);

    let maskifyNumber = validator.maskify(document.getElementById("numberTc").value);
    
    let isValidCardNumber = validator.isNumber(document.getElementById("numberTc").value);

    let img = document.getElementById("img-c");
   //alert(isValidCardNumber ? "Son numeros" : "Contiene otro caracter diferente a numeros");

   if(isValidCardNumber){
    if (isValidCreditCard) {
      img.src = "./Img/cheque.svg";
      document.getElementById("third-section").style.display = "block";
      document.getElementById("third-section").appendChild(img);
      document.getElementById("valid-card-modal").innerHTML = "Tu tarjeta \n"+maskifyNumber+" es Valida";
      document.getElementById("msj-valid").innerHTML = "Puedes continuar con tu compra.";
      setTimeout(function(){ 
        document.getElementById("third-section").style.display = "none"; 
      }, 7000);
    } else{
      document.getElementById("third-section").style.display = "block";
      document.getElementById("img-c").src="./Img/boton-x.png";
      document.getElementById("valid-card-modal").innerHTML = "Tu tarjeta \n"+maskifyNumber+" No es valida";
      document.getElementById("msj-valid").innerHTML = "Intentalo nuevamente";
      setTimeout(function(){ 
        document.getElementById("third-section").style.display = "none"; 
      }, 7000);
    }
   }else{
    popup.innerHTML = "Contiene caracteres diferentes a números";
    popup.classList.toggle("show");
    showPopUp("Contiene caracteres diferentes a números");
   }
  }

});

document.getElementById("formTc").addEventListener("click", function (event) {
  event.preventDefault();
})

document.getElementById("btn-next").addEventListener("click", () =>{
  document.getElementById("first-section").style.display = "none";
  document.getElementById("second-section").style.display = "block";
  document.getElementById("hder").style.display = "block";
  document.getElementById("bd-s").style.background = "#f9f8e8";
  document.getElementById("fter").style.display = "block";
});

document.getElementById("btn-limpiar").addEventListener("click", () =>{
  document.getElementById("numberTc").value = ""
});


function showPopUp(error) {
  const duration= 300;
  let elementRef = getElementReference();
  
  removeClickListener();
  
  elementRef.innerHTML = `<span>${error}</span>`;
  elementRef.style = `animation: showPopUp ${duration}ms linear; display:flex;`;
  setTimeout(() => {
      elementRef.style = `animation: none; display:flex;`;
      addClickListener();
  }, duration)
}

function eventClick(ev) {
  ev.stopPropagation();
  const elementRef = getElementReference();
  elementRef.style = `display:none`
}

// BASE METHODS
function addClickListener() {
  document.addEventListener('click', eventClick);
}

function removeClickListener() {
  document.removeEventListener('click', eventClick);
}

function getElementReference(id = 'popUp') {
  return document.getElementById(id);
}