let xBolinha = 300;
let yBolinha = 200;
let tamBolinha = 25;
let raioBolinha = tamBolinha/2;


let xvelocidadeBolinha = 6;
let yvelocidadeBolinha = 6;

let xraquete = 5;
let yraquete = 150;
let larguraraquete = 10;
let alturaraquete = 90;

function setup(){
   
    createCanvas(600,400);
}

function draw(){
   
    background(128,128,0); 
    criaBolinha(xBolinha, yBolinha, tamBolinha);
    moveBolinha();
    bolinhaBorda();
    criaraquete(xraquete, yraquete, larguraraquete, alturaraquete);
    movimentaraquete();
    colideraquete();
}

// função bolinha
function criaBolinha(xBolinha, yBolinha, tamBolinha){
    fill("red"); 
    circle (xBolinha, yBolinha, tamBolinha);
}

// função move bolinha
function moveBolinha(){
    xBolinha += xvelocidadeBolinha;
    yBolinha += yvelocidadeBolinha;
}

function bolinhaBorda(){ 
    if (xBolinha > width || xBolinha < 0){
        xvelocidadeBolinha *= -1;
    }
    if (yBolinha > height || yBolinha < 0){
        yvelocidadeBolinha *= -1;
    }
}

function criaraquete(xraquete, yraquete, larguraraquete, alturaraquete) {
    fill("blue"); 
    rect(xraquete, yraquete, larguraraquete, alturaraquete);
}

function movimentaraquete() {
    if(keyIsDown(UP_ARROW)) {
        yraquete -= 10;
    }
    if (keyIsDown(DOWN_ARROW)) {
        yraquete += 10;
    }
}

function colideraquete() {

    if(xBolinha - raioBolinha < xraquete + larguraraquete && yBolinha - raioBolinha < yraquete + alturaraquete && yBolinha + raioBolinha > yraquete){

        xvelocidadeBolinha *= -1;
    }
}