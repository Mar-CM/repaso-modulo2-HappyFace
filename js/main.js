'use strict';

const face = document.querySelector('.js-face');
const faceSelect = document.querySelector('.js-faceSelect');
const button = document.querySelector('.js-button');
const background = document.querySelector('.js-box');


// He creado una función recogiendo el evento del botón, hacienndo que si selecciona la cara triste se pinte en el html, y si elige una cara feliz se pinte en el html

function changeFace(){
    const faceInput = faceSelect.value; // recojo el valor del select dentro del evento

    if (faceInput === 'happy'){ // hago un condicional diciendo que si el valor del select = al nombre del value '' en string, me haga X y si no es, me haga Z.
        face.innerHTML = ":)";
    } else {
        face.innerHTML = ":(";
    }

    // Aquí podriamos hacer un condicional ternario al tener solo 2 opciones
    // face.innerHTML = faceInput === "happy" ? ":)" : ":("
}

// Esta función nos está devolviendo el número aleatorio
function getRandomInt(max) {
    return Math.floor(Math.random() * max); // Math.floor usa números enteros, sin decimales

}

function changeBackgroundNumber(){
    
    const randomNumber = getRandomInt(100); // recogemos la función del número aleatorio en una valiable para poder usarla, además le damos el parametro 100 para que el número no sea mayor que esta cifra
    

    if ( randomNumber % 2 === 0){ // Añadimos el condicional de si es par poner uno y si es impar poner otro. Añadimos las clases a nuestro contenedor.
        background.classList.add('yellow');
        background.classList.remove('orange');

    } else {
        background.classList.remove('yellow');
        background.classList.add('orange');
    }
}

function handleClick(event){
    event.preventDefault();

    // Para que sea más legible, hemos sacado las dos funciones fuera, y las recogemos en la función manejadora que tiene el evento del click

    changeFace();
    changeBackgroundNumber();
};

button.addEventListener('click', handleClick);

// La segunda parte, generaremos un nº aleatorio de 100 como máximo. Hacemos que si es par, pintaremos el HTML de un color, si es impar de otro.