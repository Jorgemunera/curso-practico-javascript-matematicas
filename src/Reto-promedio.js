//Con ciclo For
function promedio1(arr){
    let acumulado=0;
    for (let i = 0; i < arr.length; i++) {
        acumulado += arr[i];
    }
    const promedio=acumulado/arr.length;
    return promedio;
}

//Con reduce
function promedio2(arr){
    let acumulado=arr.reduce((acum,item)=>acum+item,0)
    const promedio=acumulado/arr.length;
    return promedio;
}

console.log(promedio2([2,3,4,5]));