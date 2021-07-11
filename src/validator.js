const validator = {

  isValid: (creditCardNumber) => {
    
    /*Se declara variable de tipo array (creditCardNumberInverse) para guardar el numero invertido, variable tipo array (creditCardNumberSplitPair) 
    para guardar la suma de los digitos de los numeros pares en caso de que sean mayores a 10 y la variable (suma) donde se  guarda las suma de todos los digitos y nuevos digitos
    para verficar si es valida o no*/
    let creditCardNumberInverse = [];
    let creditCardNumberSplitPair = [];
    let sum = 0;

    /*se reasigna la variable creditCardNumber para convertila de strig a array*/
    creditCardNumber = creditCardNumber.split("");
    

    /*Se crear un bucle for para recorrer el arreglo y obtener el numero invertido donde creditCardNumberInverse[i] contiene el valor de las posiciones del arreglo invertidadas
    ya que mediante creditCardNumber.length - (i + 1) en el recorrido cero del ciclo for toma la ultima posicion, en el recorrido 1 toma la penultima posicion ya que se le suma i y asi sucesivamente*/
    for (let i = 0; i < creditCardNumber.length; i++) {
      creditCardNumberInverse[i] = creditCardNumber[creditCardNumber.length - (i + 1)];
    }

  // creditCardNumberInverse = creditCardNumber.reverse(); función para invertir mas facil

   

    /* se crea un blucle for que recorre el numero de tarjeta ya invertido y dentro del bucle tenemos una primera condición (if) que verifica si la posición en par o impar, en este caso se toman los impares
     con la operacion i % 2 == 1 en donde el residuo indica si la posicion es par o impar. Ejemplo(i=3 module=1) en este caso la operación arroja un numero impar.*/
    for (let i = 0; i < creditCardNumberInverse.length; i++) {
      if (i % 2 == 1) {  
    // Se reasigna en contenido de la varible creditCardNumberInverse[i] multiplicando su valor por 2
    creditCardNumberInverse[i] = creditCardNumberInverse[i] * 2; 
    /*Se  crea una condicion (if) donde el nuevo valor de creditCardNumberInverse[i] comparara indicando que si este es mayor o igual a 10 se crea un nuevo arreglo donde la posicion se vuelve sting (toString) y luego 
    se separa (split("")) y esto se asigna a creditCardNumberSplitPair para luego sumar sus dgitos individuales*/
   if (creditCardNumberInverse[i] >= 10) {
          creditCardNumberSplitPair = creditCardNumberInverse[i].toString().split("");
  /*Se realiza la suma de los 2 digitos que fueron >=10 y se separaron el primero en la posicion[0] y el segundo en posicion [1]. Se implementa parseInt() para pasar los valores de strig a numero y esto se 
  reasigna a creditCardNumberInverse[i]*/
    creditCardNumberInverse[i] = parseInt(creditCardNumberSplitPair[0]) + parseInt(creditCardNumberSplitPair[1]);
        }
      }
    // Se usa la variable (sum) que en este caso es un acomulador donde se sumaran todos los valores luego de realizar las operaciones
    sum = sum + parseInt(creditCardNumberInverse[i]);
    }
   /* Se crea una variable (valida) que guarda el resultado del operador ternario que en este caso se divide asi: el module 10 de sum debe ser igual 0 para que se asigne el valor verdadero (?) que es true a la variable (valida) 
    y de lo contrario se asigne el valor falso (:) a la varible (valida). Para finalizar la funcion isValid se retorna la variable (valida) que contiene un booleano*/
    let valida = sum % 10 === 0 ? true : false;
    return valida;
  },

  maskify: (creditCardNumber) => {

    //Se declara la variable (hideNumber) de tipo array y variable (showLast) de tipo string
    let hideNumber = [];
    let showLast = "";

    /*Se  usa un operador ternario en donde se condiciona en la posicion true (?) que si la logitud del array es >= a 4 extraiga los ultimos 4 digitos del mismo guardandolo en la variable (showLast)
    y de lo contrario en la posicion false (:) que lo deje igual*/
    showLast = (creditCardNumber.length >= 4) ? creditCardNumber.slice(creditCardNumber.length -4) : creditCardNumber;
    

//Se crea un bucle for en donde se esta recorriendo el arreglo creditCardNumber.length MENOS las ultimas 4 posiciones y en hideNumber se asigna un arreglo de esta logintud ("#") para los demas digitos
    for (let i = 0; i < creditCardNumber.length - 4; i++) {
      hideNumber[i] = "#";
    }
//Se usa (join("")) para pasar hideNumber de array a string y se le añade concat() para unir los ultimos 4 digitos al string y se retorna hideNumber
    hideNumber = hideNumber.join("").concat(showLast);
    return hideNumber;
  },
  
  
  isNumber: (creditCardNumber) => {
    
    let t = true;
    for (let i = 0; i < creditCardNumber.length; i++) {
<<<<<<< HEAD
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
=======
    
      if (!isNaN(Number(creditCardNumber[i])) && creditCardNumber[i] !== " " ) {
    
    t = true;
    
  } else {
    t = false;
    break;
  }
  
}  
return t;
 
 
 },  
  
>>>>>>> 3e4168474dbbe5ae7c59f6a48e4cb5a014afc561
};


//isNumber : (creditCardNumber) => !/\D/.test(creditCardNumber),
export default validator;
