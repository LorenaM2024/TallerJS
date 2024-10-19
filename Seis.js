//Punto Seis

function calcularPrecioFinal (precioInicial, Descuento){
    // Solo admitir números
        //Calcular porcentaje

        let DescuentoAplicado = (precioInicial*Descuento)/100;
        let PrecioFinal = precioInicial-DescuentoAplicado;
        console.log ("Tu valor a pagar es de $" + PrecioFinal+ ". Punto Seis. ");
         return PrecioFinal
        }




let precioInicial = "300";
let Descuento = "10";
let PrecioFinal = calcularPrecioFinal (precioInicial,Descuento)


