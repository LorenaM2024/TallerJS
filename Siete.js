//Votar según edad
//Si puede votar si es mayor a 18 años

function puedeVotar (Edad){
    // Solo admitir números
    if (isNaN(Edad) || isNaN(Edad) ) {
        return 'One of the parameters is not a number :('
      } else if (Edad > 18) {
        return `True :) Eres mayor de edad,¡Puedes votar! `;
      }else if (Edad < 18) {
        return 'False :c Eres menor de edad y aún no puedes votar,' 

      }else {
        return "Fail";
      }      
}
console.log(puedeVotar(25),"Punto Siete con operadores");