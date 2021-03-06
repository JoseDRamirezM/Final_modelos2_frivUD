var canvas = document.getElementById("myCanvas");
var contexto = canvas.getContext("2d");
var lado = 30;
var suelo = canvas.height-lado;
var alto_personaje = 30;
var ancho_personaje = 30;
var x_personaje = (canvas.width-ancho_personaje)/2;
var y_personaje = suelo;
var vel_y = 0;
var izquierda = false;
var derecha = false;
var arriba = false;
var salto =  false;
var puntaje = 0;
var vidas = 3;
var color = "#F7FA00";

document.addEventListener("keydown", flechaPresionada, false);
document.addEventListener("keyup", flechaSuelta, false);

function flechaPresionada(e){
    if (e.keyCode == 39){
        derecha = true;
    }else if (e.keyCode == 37){
        izquierda = true;
    }else if (e.keyCode == 38){
        arriba = true;
    }
}
function flechaSuelta(e){
    if (e.keyCode == 39){
        derecha = false;
    }else if(e.keyCode == 37){
        izquierda = false;
    }else if (e.keyCode == 38){
        arriba = false;
    }
}


function drawPersonaje() {
    contexto.beginPath();
    contexto.rect(x_personaje, y_personaje , lado, lado);
    contexto.fillStyle = "#08FA00"; //color
    contexto.fill();
    contexto.closePath();
}

function drawSuelo(){
    contexto.beginPath();
    contexto.strokeStyle = "#A9A9A9"
    contexto.lineWidth = 8;
    contexto.moveTo(0,suelo+lado)
    contexto.lineTo(canvas.width,suelo+lado);
    contexto.stroke();
}

function irDerecha(){
    x_personaje += 7;
}

function irIzquierda(){
    x_personaje -= 7;
}

function saltar(){
    vel_y -=20;
    salto = true;
}

function draw(){
    contexto.clearRect(0, 0, canvas.width, canvas.height);
    drawPersonaje();
    drawSuelo();

    if(derecha && x_personaje < canvas.width-ancho_personaje){
        irDerecha();
    }
    else if (izquierda && x_personaje > 0 ){
        irIzquierda();
    }else if (arriba && !salto){
        saltar();
    }

    y_personaje += 3.5;
    y_personaje += vel_y;
    vel_y *= 0.89;

    if (y_personaje > suelo){
        salto = false;
        y_personaje = suelo;
        vel_y = 0;
    }

    requestAnimationFrame(draw);
}

draw();