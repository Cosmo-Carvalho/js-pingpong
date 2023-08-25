/////////////////////////////////////////////////////////////

//variáveis da bolinha:
let xbolinha = 300
let ybolinha = 300
let diâmetro = 50
let raio = diâmetro/2

//velocidade da bolinha:
let xvelocidade = 3
let yvelocidade = 6

//variavéis da raquete
let rcomprimento= 20
let raltura= 100
let xraquete = 10
let yraquete = 250

//variavéis da raquete oponente
let rcomprimentooponente= 20
let ralturaoponente= 100
let xraqueteoponente = 570
let yraqueteoponente = 250

//velocidade da oponenete:
let yvelocidadeoponenete = 6

//pontos
let MeusPontos = 0
let PontosOponente = 0

let color1 = "red"
let color2 = "blue"

//sons

let raquetada;
let ponto;
let trilha;

/////////////////////////////////////////////////////////////

//código geral
function setup() {
createCanvas(600, 600);
  trilha.loop();
}
function draw() { 
background("black")
  
  MostrarBola();
  MovimentoBola();
  ColisãoBola();

  MostrarRaquete(xraquete,yraquete,color2);
  MovimentoRaquete();
  ColisãoRaquete()
  
  MostrarRaquete(xraqueteoponente,yraqueteoponente,color1);
  MovimentoRaqueteOponente();
  ColisãoRaqueteOponente();

  ColisãoBolinhaRaquete();
  ColisãoBolinhaRaqueteOponente();
  Placar ();
  Pontos ();
}

/////////////////////////////////////////////////////////////

//Codigos específicos:

function MostrarBola() {
   fill ("white")
  circle(xbolinha,ybolinha,diâmetro)
} 
function MovimentoBola() {
  xbolinha += xvelocidade
  ybolinha += yvelocidade
}
function ColisãoBola() {
  if (xbolinha + raio> width || xbolinha - raio< 0){ xvelocidade *= -1; } 
  if (ybolinha + raio> height || ybolinha - raio < 0){ yvelocidade *= -1; }
}

function MostrarRaquete(x,y,z){
  fill (z)
  rect(x,y,rcomprimento,raltura)
}
function MovimentoRaquete(){ 
  if (keyIsDown(UP_ARROW)) {yraquete -= 10;}
  if (keyIsDown(DOWN_ARROW)) {yraquete += 10;}
}
function ColisãoRaquete() {

  if (yraquete < 0){ yraquete = -1; }
    if (yraquete > 600-raltura){ yraquete = 600-raltura;}
}

function MovimentoRaqueteOponente(){ 
  if (keyIsDown(UP_ARROW)) {yraqueteoponente -= 10;}
  if (keyIsDown(DOWN_ARROW)) {yraqueteoponente += 10;}
}
function ColisãoRaqueteOponente() {

  if (yraqueteoponente < 0){ yraqueteoponente = -1; }
    if (yraqueteoponente > 600-raltura){ yraqueteoponente = 600-ralturaoponente;}
  
}
function MovimentoRaqueteOponente(){ 
  if (keyIsDown(87)) {yraqueteoponente -= 10;}
  if (keyIsDown(83)) {yraqueteoponente+= 10;}
}

function ColisãoBolinhaRaquete(){
  if (xbolinha - raio < xraquete + rcomprimento & ybolinha - raio < yraquete + raltura & ybolinha + raio > yraquete) 
  {xvelocidade *=-1; raquetada.play();}
  
}
function ColisãoBolinhaRaqueteOponente(){
     if (xbolinha + raio > xraqueteoponente + rcomprimentooponente - 11 & ybolinha + raio < yraqueteoponente + ralturaoponente & ybolinha + raio > yraqueteoponente - ralturaoponente)
  {xvelocidade*=-1; raquetada.play();} 
}
function Placar (){
  textSize(20)
  textAlign(CENTER);
  fill ("red");
  rect (376,20,50,30);
  fill ("white");
  text (PontosOponente, 400, 40);
  fill ("blue");
  rect (175,20,50,30);
  fill ("white");
  text (MeusPontos, 200, 40);
  
}
function Pontos (){
  if (xbolinha > 575) {MeusPontos += 1; ponto.play();}
  if (xbolinha < 25) {PontosOponente += 1; ponto.play();}
}
function preload(){
  trilha = loadSound ("trilha.mp3")
  ponto = loadSound ("ponto.mp3")
  raquetada = loadSound ("raquetada.mp3")
}
  
