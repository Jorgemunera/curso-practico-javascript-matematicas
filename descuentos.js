const btn=document.querySelector('#calcular');
const inputPrice=document.querySelector('#price');
const inputCupon=document.querySelector('#cupon');
const pResult=document.querySelector('#result');

btn.addEventListener('click', calcularPrecioConDescuento);

//Solucion con Objetos
// const cuponObj={
//     'Navidad': 25,
//     'Cumpleaños': 30,
//     'Pascua': 15
// }

//Solucion con arrays
const cuponArr = [];

cuponArr.push({
    name: 'Navidad',
    discount: 25,
});
cuponArr.push({
    name: 'Cumpleaños',
    discount: 30,
});
cuponArr.push({
    name: 'Pascua',
    discount: 15,
});

function calcularPrecioConDescuento(){
    const price= Number(inputPrice.value);
    const cupon = inputCupon.value;

if (!price || !cupon) {
    pResult.innerText='Debes llenar correctamente el formulario';
    return;
}

let discount;

const cuponInArr=cuponArr.find(item=>item.name == cupon);

if (cuponInArr) {
    discount = cuponInArr.discount;
}else{
    pResult.innerText = 'El cupon no es válido';
    return;
}

console.log({
    cupon,
    discount,
    cuponInArr,
    cuponArr
})
//Solucion con Objetos
// if(cuponObj[cupon]){
//     discount=cuponObj[cupon]
// }else{
//     pResult.innerText = 'El cupon no es válido';
//     return;
// }

//Solucion con switch
    // switch(cupon){
    //     case 'Cumpleaños':
    //         discount = 30;
    //         break;

    //     case 'Navidad':
    //         discount = 25;
    //         break;

    //     default: pResult.innerText = 'El cupon no es válido';
    //         return;
    // }

    const newPrice= (price*(100-discount))/100;

    pResult.innerText = 'El nuevo precio con descuento es $' + newPrice;
}