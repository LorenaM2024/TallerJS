//Punto 1 del taller

  //Saber si un año es bisiesto o no
  // El año debe ser divisible por 4
  //Sin embbargo, si el año es divisible por 100, no es bisiesto.
  //A menos que el año sea divisible por 400, entonces si es bisiesto

  function esBisiesto (year){
    if(year % 4 ==0){
     if(year % 100 ==0){
         if(year%400 ==0){
             return true;

         }else{
             return false;
         }
    }else{
         return true;}

    }

}


console.log(esBisiesto(2024), "Punto Uno");

function esBisiestoOperadores (year){
    let resultado = (year % 4== 0 && year % 100 !==0) || year %400 == 0;
    let mensaje = resultado ? "Es un año bisisesto." : "No es un año bisisesto.";
return mensaje;


}

console.log(esBisiestoOperadores(2020),"Punto Uno con operadores");





  



