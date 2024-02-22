function circulo() {
    let figura =document.getElementById("figura");

    figura.classList.toggle("circulo");

    const h2= document.getElementById("titulo");

    h2.innerText="Circulo";
}

function rectangulo() {
    let figura =document.querySelector("#figura");

    figura.classList.toggle("rectangulo");

    const h2= document.getElementById("titulo");

    h2.innerText="Rectangulo";

}


function degradado(){
    let figura =document.getElementById("figura");

    figura.classList.toggle("degradado");

    const h2= document.getElementById("titulo");

    h2.innerText="Degradado";
}

function gif(){
    let figura =document.getElementById("figura");

    figura.classList.toggle("gif");

    const h2= document.getElementById("titulo");

    h2.innerText="GIF PATO";
}

function luna(){
    let figura =document.getElementById("figura");

    figura.classList.toggle("luna");

    const h2= document.getElementById("titulo");

    h2.innerText="luna";
}

function estrella(){
    let figura =document.getElementById("figura");

    figura.classList.toggle("estrella");

    const h2= document.getElementById("titulo");

    h2.innerText="Estrella";

}

function triangulo(){
    let figura =document.getElementById("figura");

    figura.classList.toggle("triangulo")

    const h2= document.getElementById("titulo");

    h2.innerText="Triangulo";
}

function moveTop(){
    let figura = document.getElementById("figura");

    alert("Estas moviendo la figura hacia arriba.");
    figura.classList.toggle("top");

    const h2= document.getElementById("titulo");

    h2.innerText="Top";
}

function moveBottom(){
    let figura = document.getElementById("figura");

    alert("Estas moviendo la figura hacia abajo.");
    figura.classList.toggle("Bottom");

    const h2= document.getElementById("titulo");

    h2.innerText="Abajo";
}

function moveLeft(){
    let figura = document.getElementById("figura");

    alert("Estas moviendo la figura hacia la izquierda.");
    figura.classList.toggle("Left");

    const h2= document.getElementById("titulo");

    h2.innerText="Izquierda";
}

function moveRight(){
    let figura = document.getElementById("figura");

    alert("Estas moviendo la figura hacia la derecha.");
    figura.classList.toggle("Right");

    const h2= document.getElementById("titulo");

    h2.innerText="Derecha";
}

function Diagonal(){
    let figura = document.getElementById("figura");

    alert("Estas moviendo la figura en diagonal.");
    figura.classList.toggle("Diagonal");

    const h2= document.getElementById("titulo");

    h2.innerText="Diagonal";
}

function fondo(){
    let body = document.body;
    alert("Estas haciendo cambio de fondo.");

    body.classList.toggle("fondo");

    const h2= document.getElementById("titulo");

    h2.innerText="Fondo";

}

function PanelLateral(){
    let panel = document.getElementById("panel-lateral");

    panel.classList.toggle("active");

    const h2= document.getElementById("titulo");

    h2.innerText="Panel lateral";
}

function PanelSuperior(){
    let panel = document.getElementById("panel-superior");

    panel.classList.toggle("active");

    const h2= document.getElementById("titulo");

    h2.innerText="Panel Superior";
}

function cambiarFondo(){
    let color = prompt("Ingresa el color que desees: ");

    var fondo = document.getElementById("ejemplo");

    fondo.style.backgroundColor = color;

    const h2= document.getElementById("titulo");

    h2.innerText="Cambio de color";
}

