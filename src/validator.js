const validator = {
  isValid: (creditCardNumber) => {
    let creditCardNumberInverse = [];
    let splitNumber = [];
    let sum = 0;

    creditCardNumber = creditCardNumber.split("");

    for (let i = 0; i < creditCardNumber.length; i++) {
      creditCardNumberInverse[i] =
        creditCardNumber[creditCardNumber.length - (i + 1)];
      if (i % 2 != 0) {
        creditCardNumberInverse[i] = creditCardNumberInverse[i] * 2;
        if (creditCardNumberInverse[i] >= 10) {
          splitNumber = creditCardNumberInverse[i].toString().split("");
          creditCardNumberInverse[i] =
            parseInt(splitNumber[0]) + parseInt(splitNumber[1]);
        }
      }
      sum = sum + parseInt(creditCardNumberInverse[i]);
    }
    console.log(creditCardNumberInverse);
    let res = sum % 10 == 0 ? true : false;

    return res;
  },
  
  maskify: (creditCardNumber) => {
    let mask = [];
    let creditCardNumberMask = [];

    for (let i = 0; i < creditCardNumber.length - 4; i++) {
      if (creditCardNumber.length > 4) {
        mask[i] = "#";
      } else {
        mask[i] = creditCardNumber[i];
      }
    }

    for (let i = 0; i < creditCardNumber.length; i++) {
      if (mask[i] === "" || mask[i] === null || mask[i] === undefined) {
        creditCardNumberMask[i] = creditCardNumber[i];
      } else {
        creditCardNumberMask[i] = mask[i];
      }
    }

    creditCardNumber = creditCardNumberMask.join("");
    console.log(creditCardNumber);
    return creditCardNumber;
  },

  isNumber:(creditCardNumber) => {
    let n = true;
    for (let i = 0; i < creditCardNumber.length; i++) {
      let num = Number(creditCardNumber[i]);

      if (!isNaN(num)) {
        console.log(creditCardNumber[i], typeof creditCardNumber[i]);
        n = true;
      }else {
        console.log(creditCardNumber[i], " Not is a number NaN ",typeof creditCardNumber[i] );
        n = false;
        break;
      }
      console.log(n);      
    }
    return n;
  }
};

export default validator;
