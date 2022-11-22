const divBotones=document.querySelector('.botones');
const bCuadrado=document.getElementById('b1');
const bTriangulo=document.getElementById('b2');
const bCirculo=document.getElementById('b3');

const divCuadrado=document.querySelector('#info-cuadrado');
const inputLado=document.querySelector('#lado');
const bCalcularCuadrado=document.querySelector('#bCalcularCuadrado');

const divTriangulo=document.querySelector('#info-triangulo');
const inputBase=document.querySelector('#base');
const inputLado1=document.querySelector('#lado1');
const inputLado2=document.querySelector('#lado2');
const bCalcularTriangulo=document.querySelector('#bCalcularTriangulo');

const divCirculo=document.querySelector('#info-circulo');
const inputRadio=document.querySelector('#radio');
const bCalcularCirculo=document.querySelector('#bCalcularCirculo');

const bReload=document.querySelector('#bReload');

const divResultado=document.querySelector('#resultado');
const divDatos=document.querySelector('#datos');
const divCalculos=document.querySelector('#calculos');


bCuadrado.addEventListener('click', mostrarCuadrado);
bTriangulo.addEventListener('click', mostrarTriangulo);
bCirculo.addEventListener('click', mostrarCirculo);
bCalcularCuadrado.addEventListener('click', calcularCuadrado);
bCalcularTriangulo.addEventListener('click', calcularTriangulo);
bCalcularCirculo.addEventListener('click',calcularCirculo);

bReload.addEventListener('click', ()=>{location.reload()});

//Cuadrado

function mostrarCuadrado(){
    divBotones.style.display="none";
    divCuadrado.style.display="block";
    bCalcularCuadrado.style.display="block";
    divResultado.style.display="block";
}
function calcularCuadrado(){
    const lado=Number(Number((inputLado.value)).toFixed(2));
    const area= Number((Math.pow(lado,2)).toFixed(2));
    const perimetro= Number((lado*4).toFixed(2));

    divDatos.innerHTML=`<h2>Datos</h2><h3>Cuadrado</h3><p>Lado del Cuadrado: ${lado}</p>`
    divCalculos.innerHTML=`<h2>Calculos</h2><p>Area: ${area}</p> <p>Perimetro: ${perimetro}</p>`
    
}
//Triangulo
function mostrarTriangulo(){
    divBotones.style.display="none";
    divTriangulo.style.display="block";
    bCalcularTriangulo.style.display="block";
    divResultado.style.display="block";
}
function calcularTriangulo(){

    const base=Number(Number(inputBase.value).toFixed(2));
    const lado1=Number(Number(inputLado1.value).toFixed(2));
    const lado2=Number(Number(inputLado2.value).toFixed(2));

    if(lado1===lado2 & lado1!=base){
        const altura=Number(Math.sqrt((Math.pow(lado1,2))- ( (Math.pow(base,2)) /4) ).toFixed(2));
        const perimetro =Number((lado1+lado2+base).toFixed(2));
        const area=Number(((base*altura)/2).toFixed(2));

        divDatos.innerHTML=`<h2>Datos</h2><h3>Triangulo Isosceles</h3><p>Base: ${base}</p> <p>Lado 1: ${lado1}</p> <p>Lado 2: ${lado2}</p>`;
        divCalculos.innerHTML=`<h2>Calculos</h2><p>Altura: ${altura}</p> <p>Perimetro: ${perimetro}</p> <p>Area: ${area}</p>`;

    }else if(lado1===lado2 && lado1===base){
        const altura= Number((((lado1)*(Math.sqrt(3)))/2).toFixed(2));
        const perimetro = Number((lado1+lado2+base).toFixed(2));
        const area= Number((base*altura)/2).toFixed(2);
        
        divDatos.innerHTML=`<h2>Datos</h2><h3>Triangulo Equilatero</h3><p>Base: ${base}</p> <p>Lado 1: ${lado1}</p> <p>Lado 2: ${lado2}</p>`;
        divCalculos.innerHTML=`<h2>Calculos</h2><p>Altura: ${altura}</p> <p>Perimetro: ${perimetro}</p> <p>Area: ${area}</p>`;

    }else if(lado1!=lado2 && lado1!=base && lado2!=base){
        const semiperimetro=Number(((base+lado1+lado2)/2).toFixed(2));
        const altura=Number(((2/base)*(Math.sqrt( (semiperimetro)*((semiperimetro-base)*(semiperimetro-lado1)*(semiperimetro-lado2)) ))).toFixed(2));
        const perimetro = Number((lado1+lado2+base).toFixed(2));
        const area= Number((base*altura)/2).toFixed(2);
        
        divDatos.innerHTML=`<h2>Datos</h2><h3>Triangulo Escaleno</h3><p>Base: ${base}</p> <p>Lado 1: ${lado1}</p> <p>Lado 2: ${lado2}</p>`;
        divCalculos.innerHTML=`<h2>Calculos</h2><p>Altura: ${altura}</p> <p>Perimetro: ${perimetro}</p> <p>Area: ${area}</p>`;
    }
}

//Circulo

function mostrarCirculo(){
    divBotones.style.display="none";
    divCirculo.style.display="block";
    bCalcularCirculo.style.display="block";
    divResultado.style.display="block";
}
function calcularCirculo(){
    const radio=Number(Number((inputRadio.value)).toFixed(2));
    const diametro= Number((2*radio).toFixed(2));
    const area=Number((Math.PI*Math.pow(radio,2)).toFixed(2));
    
    divDatos.innerHTML=`<h2>Datos</h2><h3>Circulo</h3><p>Radio: ${radio}</p>`;
    divCalculos.innerHTML=`<h2>Calculos</h2><p>Diametro: ${diametro}</p> <p>Area: ${area}</p>`;
};
