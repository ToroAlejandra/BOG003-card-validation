import validator from "./validator.js";
console.log(validator);

<<<<<<< HEAD
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
      img.src = "img/cheque.svg";
      document.getElementById("third-section").style.display = "block";
      document.getElementById("third-section").appendChild(img);
      document.getElementById("valid-card-modal").innerHTML = "Tu tarjeta \n"+maskifyNumber+" es Valida";
      document.getElementById("msj-valid").innerHTML = "Puedes continuar con tu compra.";
      setTimeout(function(){ 
        document.getElementById("third-section").style.display = "none"; 
      }, 4000);
    } else{
      document.getElementById("third-section").style.display = "block";
      document.getElementById("img-c").src="img/boton-x.png";
      document.getElementById("valid-card-modal").innerHTML = "Tu tarjeta \n"+maskifyNumber+" No es valida";
      document.getElementById("msj-valid").innerHTML = "Intentalo nuevamente";
      setTimeout(function(){ 
        document.getElementById("third-section").style.display = "none"; 
      }, 4000);
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
=======

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
      document.getElementById("imgcorrect").src="./Img/correctvalidcard.svg"
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

>>>>>>> 3e4168474dbbe5ae7c59f6a48e4cb5a014afc561

document.getElementById("btn-limpiar").addEventListener("click", () =>{
  document.getElementById("numberTc").value = ""
});

<<<<<<< HEAD

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
=======
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
>>>>>>> 3e4168474dbbe5ae7c59f6a48e4cb5a014afc561
