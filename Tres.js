//Punto tres
//Mostrar el número mayor de dos numeros dados
//mayorDeDosque recibadosparámetros n1 y n2.

function mayorDeDosque (n1, n2){
    // Solo admitir números
    if (isNaN(n1) || isNaN(n2) ) {
        return 'One of the parameters is not a number :('
      } else if (n2 > n1) {
        return `El número ${n2} es mayor que ${n1}. `;
      }else if (n2 == n1) {
        return 'Equal numbers :)' 
    }else if  (n1 > n2) {
        return `El número ${n1} es mayor que ${n2}. `;
      }else {
        return "Fail";
      }      
}
console.log(mayorDeDosque(3,4),"Punto Tres con operadores");
