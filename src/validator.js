const validator = {
//export default {
  isValid: (creditCardNumber) => {
    let creditCardNumberInverse = [];
    let creditCardNumberSplitPair = [];
    let sum = 0;

    creditCardNumber = creditCardNumber.split("");

    for (let i = 0; i < creditCardNumber.length; i++) {
      creditCardNumberInverse[i] = creditCardNumber[creditCardNumber.length - (i + 1)];
    }

    for (let i = 0; i < creditCardNumberInverse.length; i++) {
      if (i % 2 == 1) {
        creditCardNumberInverse[i] = creditCardNumberInverse[i] * 2;

        if (creditCardNumberInverse[i] >= 10) {
          creditCardNumberSplitPair = creditCardNumberInverse[i].toString().split("");

          creditCardNumberInverse[i] =
            parseInt(creditCardNumberSplitPair[0]) + parseInt(creditCardNumberSplitPair[1]);
        }
      }
      
      sum = sum + parseInt(creditCardNumberInverse[i]);
    }
    
    let valida = sum % 10 === 0 ? true : false;
    return valida;
  },

  maskify: (creditCardNumber) => {
    let hideNumber = [];
    let showLast = [];

    if (creditCardNumber.length >= 4) {
      showLast = creditCardNumber.slice(creditCardNumber.length - 4);
    } else {
      showLast = creditCardNumber;
    }

    for (let i = 0; i < creditCardNumber.length - 4; i++) {
      hideNumber[i] = "#";
    }

    hideNumber = hideNumber.join("").concat(showLast);
    return hideNumber;
  },
  
  
  isNumber: (creditCardNumber) => {
    
    let t = true;
    for (let i = 0; i < creditCardNumber.length; i++) {
      //let num = Number(creditCardNumber[i]);
      if (!isNaN((creditCardNumber[i])) && creditCardNumber[i] !== ' ') {
      t = true;
      console.log("valida",t," : ",creditCardNumber[i]);
      } else {
        t = false;
        console.log("error",t);
        break;
      }
    }
    return t;
  },   
};


//isNumber : (creditCardNumber) => !/\D/.test(creditCardNumber),
export default validator;
