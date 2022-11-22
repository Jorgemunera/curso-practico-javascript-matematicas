//Una solución
function esPar(arr){
    if (arr.length % 2 === 0){return true}
    else{return false;}
}

//otra solución
const isEven= (arr)=> arr.length%2 === 0 ? true : false;
const isOdd = (arr)=> !isEven(arr);

