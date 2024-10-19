//Punto Cinco
//Función que determina si un número está dentro de un rango dado.( Incluyendo Límites)

function estaEnRangoque (Numero,Inicio,Fin){
    
    if (Numero >= Inicio & Numero <= Fin) {
        return "true :)" 
    }else {
        return "false :c";}
}
let Numero = 3;
let Inicio = 1;
let Fin = 10;
let resultado =  estaEnRangoque(Numero, Inicio, Fin);
console.log(estaEnRangoque(resultado),"Punto Cinco con operadores");