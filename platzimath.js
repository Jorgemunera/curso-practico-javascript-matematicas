const Platzimath= {};

//es par
Platzimath.isEven = function (arr){
return arr.length%2 === 0 ? true : false;
}    

//es impar
Platzimath.isOdd = function(arr){
   return !Platzimath.isEven(arr);
} 

//calcular Mediana
Platzimath.calcularMediana = function(arr){
    const arrOrdenado=[...arr].sort((a,b)=>a-b)
    // console.log(arrOrdenado);
    // console.log(arr);
    let mediana
    if(Platzimath.isEven(arrOrdenado)){
        mediana = (arrOrdenado[arrOrdenado.length/2]+arrOrdenado[(arrOrdenado.length/2)-1])/ 2
        return mediana
    }
    else {
        mediana = arrOrdenado[(arrOrdenado.length-1)/ 2]
        return mediana
    }
}

//Calcular Moda
Platzimath.calcularModa = function (arr){
    const objContador=arr.reduce((obj,item)=>{
        if(!obj[item]){obj[item]=1}
        else{obj[item]=obj[item]+1}
        return obj;
    },{});

   const arrContador=Object.entries(objContador)
   const arrOrdenadoPorValues=[...arrContador].sort((a,b)=> b[1] - a[1]);
   let arrModa=[];
   arrModa.push(arrOrdenadoPorValues[0][0])
    for (let i = 1; i < arrOrdenadoPorValues.length; i++) {
        if(arrOrdenadoPorValues[i][1]>=arrOrdenadoPorValues[0][1]){
            arrModa.push(arrOrdenadoPorValues[i][0]);    
        }
    }
    if(arrModa.length>2 || arrModa.length===arr.length){
        return console.log('Distribucion considerada sin moda por alguna de estas causas: 1. todos los datos tienen la misma frecuencia 2. hay mas de 2 valores con la misma frecuencia maxima absoluta')
    }

    return arrModa
}

