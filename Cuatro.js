//Punto Cuatro
 // De minitos a cadena de horas y minitos correspondiente8 


 function ConvertirMinutos (minutos){
    //Calcular las horas
    const horas = Math.floor (minutos/60);
    //Calcular los minutos restantes
    const MinutosRestantes = minutos % 60
  
  //Retornar el resultados
  return `${horas} horas y ${MinutosRestantes} minutos.`;
  
  }
  
  console.log(ConvertirMinutos(150), "Punto Cuatro");