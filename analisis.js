//Analisis personal para Juanita
function encontrarPersona(personaEnBusqueda){
    return salarios.find(persona=>persona.name === personaEnBusqueda)
}

function medianaPorPersona(nombrePersona){
    const trabajos=encontrarPersona(nombrePersona).trabajos;
    const salarios=trabajos.map(function(elemento){
        return elemento.salario
    })

    const medianaSalarios = Platzimath.calcularMediana(salarios)
    //console.log(medianaSalarios)
    return medianaSalarios
}

function proyeccionPorPersona(nombrePersona){
    const trabajos= encontrarPersona(nombrePersona).trabajos;

    let porcentajesDeIncrementos=[]

    for (let i = 1; i < trabajos.length; i++) {
          let incremento = (trabajos[i].salario - trabajos[i-1].salario)/trabajos[i-1].salario;
          porcentajesDeIncrementos.push(incremento)
    }
    
    let porcentajesDeIncrementosOrdenado = [...porcentajesDeIncrementos].sort((a,b)=> a-b)
    const medianaPorcentajesDeIncremento = Platzimath.calcularMediana(porcentajesDeIncrementosOrdenado);

   const salarioProyectado = (trabajos[trabajos.length-1].salario)*(1+medianaPorcentajesDeIncremento)

   return salarioProyectado
}

//Analisis empresarial, lo que queremos hacer
/*
{
    Industrias mokepon:{
        2018: [salario1, salario2, salario3]
        2019: [salario1, salario2, salario3]
    }
}
*/
const empresas= {};
for (persona of salarios) {
    for (trabajo of persona.trabajos) {
        if(!empresas[trabajo.empresa]){
            empresas[trabajo.empresa] = {};
        }
        if(!empresas[trabajo.empresa][trabajo.year]){
            empresas[trabajo.empresa][trabajo.year]= [];
        }
        
        empresas[trabajo.empresa][trabajo.year].push(trabajo.salario)
    }
}
//console.log({empresas})

function medianaDeSalarioPorAñoPorEmpresa(empresa,year){
    if(!empresas[empresa]){
        return console.warn('la empresa no existe');
    }
    if(!empresas[empresa][year]){
        return console.warn('no hay registros en ese año especifico');
    }
    return Platzimath.calcularMediana(empresas[empresa][year]);
}

function proyeccionPorEmpresa(empresa){
    if(!empresas[empresa]){
        return console.warn('la empresa no existe');
    }else {
        //Object values me devuelve un array de arrays con los salarios de cada año en cada uno de los array
        //.map en este caso, por cada array me va a calcular la mediana de ese año y ese valos lo va a meter en un nuevo array
      const medianasPorAño=  Object.values(empresas[empresa]).map(arr=>Platzimath.calcularMediana(arr));

    let porcentajesDeIncrementos=[]

    for (let i = 1; i < medianasPorAño.length; i++) {
        let incremento = (medianasPorAño[i] - medianasPorAño[i-1])/medianasPorAño[i-1];
        porcentajesDeIncrementos.push(incremento)
    }
        let porcentajesDeIncrementosOrdenado = [...porcentajesDeIncrementos].sort((a,b)=> a-b)
        const medianaPorcentajesDeIncremento = Platzimath.calcularMediana(porcentajesDeIncrementosOrdenado);

        const nuevaMedianaDeSalarios = (medianasPorAño[medianasPorAño.length-1])*(1+medianaPorcentajesDeIncremento)

        return nuevaMedianaDeSalarios
    }
}

//Analisis general
function medianaGeneral(){
    const listaMedianas = salarios.map(persona=>medianaPorPersona(persona.name));
    const mediana = Platzimath.calcularMediana(listaMedianas);

    return mediana;
}

function medianaTopX(porcentaje){
    const listaMedianas = salarios.map(persona=>medianaPorPersona(persona.name));
    const listaMedianasOrdenada=[...listaMedianas].sort((a,b)=>b-a)

    const cantidad = Math.round(listaMedianas.length*(porcentaje/100));
    const topX = listaMedianasOrdenada.slice(0,cantidad);

    const medianaTopX = Platzimath.calcularMediana(topX)
    return medianaTopX;
}
console.log(medianaTopX(100))