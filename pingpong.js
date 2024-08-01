//aqui eu vou criar a bolinha
let xBolinha = 300;
let yBolinha = 200;
let tamBolinha = 25;
let raioBolinha = tamanhoBolinha/2;

//config velocidade bolinha
let xvelocidadeBolinha = 6;
let yvelocidadeBolinha = 6;

//configurar raquete
let xRaquete = 5;
let yRaquete = 150;
let larguraRaquete = 10;
let alturaRaquete = 90; 

function setup(){
    //aqui vou criar minha "mesa"
    createCanvas(600,400);
}

function draw(){
    //função responsável pelo "desenho e animação da mesa"
    //aqui vou por a cor da "mesa"
    //A cor da mesa é em rgb
    background(128,128,0); 
    //chamando a função cria bolinha para criar a bolinha
    criaBolinha(xBolinha, yBolinha, tamBolinha);
    //chamando a função mov bolinha
    movimentaBolinha();
    //chamando a borda
    bolinhaBorda();
    criaRaquete(xRaquete, yRaquete, larguraRaquete, alturaRaquete);
    movimentaRaquete();
    colideRaquete();
}

//função bolinha
function criaBolinha(xBolinha, yBolinha,tamBolinha){
    fill("red")
    circle (xBolinha,yBolinha,tamBolinha);
}

//função move bolinha
function moveBolinha(){
    xBolinha = xvelocidadeBolinha + xBolinha;
    yBolinha = yvelocidadeBolinha + yBolinha;
}

function Borda(){
    if (xBolinha > width || xBolinha < 0){
        xvelocidadeBolinha *= -1;
    }
    if (yBolinha > height || yBolinha < 0){
        yvelocidadeBolinha *= -1;
    }
}

//funçao cria raquete
function criaRaquete(xRaquete, yRaquete, larguraRaquete, alturaRaquete ) {
    fill("blue");
    rect(xRaquete, yRaquete, larguraRaquete, alturaRaquete);
}
//funcao responsavel pelo movimento da raquete
function movimentaRaquete() {

    if(keyisDown(UP_ARROW)){
        yRaquete -= 10;
    }
    if(keyisDown(DOWN_ARROW)){
        yRaquete += 10;
    }

}
//funçao responsavel por quamdo bater na raquete retornar em direçao contraria
function colideRaquete(){

    if(xBolinha - raioBolinha < xRaquete + larguraRaquete && yBolinha - raioBolinha < yRaquete + alturaRaquete && yBolinha + raioBolinha > yRaquete){

        xvelocidadeBolinha *= -1;
    }
}