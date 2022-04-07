
const cantNumeros = 10;
let numeros = [];
let resultado = [];
let respuesta = [];


numeros = llenarArray(cantNumeros);
onlyMetodo(numeros);
//resultado = contarNumeros(numeros);
//respuesta = resultados(resultado);

//console.log(`Longest: ${respuesta[1]}`);
//console.log(`Number: ${respuesta[0]}`);

function llenarArray(cantidad){
    for (let i = 0; i < cantidad; i++) {
        numeros[i] = Math.floor(Math.random() * (10 - 1)) + 1;
    }
    console.log(numeros);
    return numeros;
}

function contarNumeros(numeros){
    let arrayCount = [];
    let cont = 0;
    let numero = 0;
    for (let i = 0; i < numeros.length; i++) {
        numero = numeros[i];
        for (let j = 0; j < numeros.length; j++) {
            if(numeros[i] == numeros[j]){
                cont += 1;
            }
        }
        let posicion = [numero, cont];
        arrayCount = [...arrayCount, posicion];
        cont = 0;
        //console.log(arrayCount);
    }
    return arrayCount;
}

function resultados(resultado){
    let posicion = 0;
    let arrayResult = [];
    let num = '';
    let cant = '';

    resultado.forEach(resultado => {
        if(resultado[1] > posicion){
            posicion = resultado[1];
            num = resultado[0];
            cant = resultado[1];
        }
    });
    let arrayFinal = [num, cant];
    return arrayFinal;
}

function onlyMetodo(numeros){

    let number = 0;
    let longest = 0;
    numeros.forEach(idx => {
        const currentLongest = numeros.filter((num) => num === idx).length;
        if(currentLongest > longest){
            number = idx;
            longest = currentLongest;
        }
    })
    console.log({number,longest})
}