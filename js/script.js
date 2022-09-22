function Carta(nome, imagem, tecnica, criatividade, atitude){
   this.nome = nome;
   this.imagem = imagem;
   this.atributos = {};
   this.atributos.Técnica = tecnica;
   this.atributos.Criatividade = criatividade;
   this.atributos.Atitude = atitude;   
}

const carta1 = new Carta("Kurt Cobain", "https://i2.wp.com/guitarload.com.br/wp-content/uploads/2019/11/Kurt-Cobain-1.jpg?fit=1280%2C670&ssl=1", 75, 85, 95);
const carta2 = new Carta("Layne Staley", "https://www.rollingstone.com/wp-content/uploads/2018/06/alice-in-chains-best-performances-aeae08d9-ebc4-4cdc-99e3-3f616d9db384.jpg", 95,80,80);
const carta3 = new Carta("Jack White","https://i.pinimg.com/originals/77/ac/e2/77ace25c0a2cd2d00d8fa824fc0661f1.jpg", 90,95,90);
const carta4 = new Carta("Daron Malakian","https://pm1.narvii.com/6597/4fb4ab6f2f2ceba5e99b272dc11684e97cca4008_hq.jpg",85,90,95);
const carta5 = new Carta("Daniel Gildenlow","https://www.betreutesproggen.de/wp-content/uploads/2016/08/bp16-pos1-baus.jpg",100,95,70);
const carta6 = new Carta("The Rev","https://pbs.twimg.com/media/EqUrSbSW8AApz0U.jpg",95,80,80);
const carta7 = new Carta("Dave Grohl", "https://media.pitchfork.com/photos/5e7b7e0c25a55d0008c62a0c/master/pass/Dave-Grohl.jpg", 70, 85, 90);
const carta8 = new Carta("Billy Joe", "https://e00-marca.uecdn.es/assets/multimedia/imagenes/2022/08/01/16593682326798.jpg", 60,70,85);
const carta9 = new Carta("Ragnar Zolberg","https://upload.wikimedia.org/wikipedia/commons/a/ad/Ragnar_Zolberg.jpg", 95,90,85);
const carta10 = new Carta("Serj Tankian","https://www.revolvermag.com/sites/default/files/styles/image_750_x_420/public/media/images/article/serjgettycrop2001.jpg",80,90,80);
const carta11 = new Carta("Mark Sandman","https://cloudfront-us-east-1.images.arcpublishing.com/bostonglobe/O6NOCDE5BEI6TNT5JRJMDM75JE.jpg",80,100,70);
const carta12 = new Carta("Bruce Dickinson","https://www.revolvermag.com/sites/default/files/media/images/article/dsc_0188_0.jpg",95,80,80);
const carta13 = new Carta("Chris Cornell","https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2022%2F07%2F20%2FChris-Cornell-2014-tribute-072022.jpg", 95,95,85);
const carta14 = new Carta("Axl Rose","https://ichef.bbci.co.uk/news/1024/cpsprodpb/17316/production/_87489949_4ed42c25-12d1-4562-bf88-68e304869887.jpg",80,70,90);
const carta15 = new Carta("Joey Ramone","https://faroutmagazine.co.uk/static/uploads/2021/06/This-was-Joey-Ramones-favourite-band.jpg",30,60,100);
const carta16 = new Carta("David Bowie","https://ychef.files.bbci.co.uk/976x549/p01j3jyb.jpg",70,100,85);

let cartasGeral = [carta1, carta2, carta3, carta4, carta5,carta6,carta7,carta8,carta9,carta10,carta11,carta12, carta13, carta14, carta15, carta16];
let cartasMaquina =[];
let cartasJogador=[];
let cartaMaquina;
let cartaJogador;
for(i=cartasGeral.length;i>0;i=cartasGeral.length){   
   let numPseudoAleatorio = Math.floor(Math.random()*cartasGeral.length);
   switch(cartasGeral.length%2===0){
      case true:
         cartasMaquina.push(cartasGeral[numPseudoAleatorio]);
         break;
      case false:
         cartasJogador.push(cartasGeral[numPseudoAleatorio]);
         break;
   }
   cartasGeral.splice(numPseudoAleatorio,1);
};

const botaoReiniciar = document.querySelector('#btnReiniciar');
const botaoSortearCarta = document.getElementById('btnSortear');
const botaoJogar = document.getElementById('btnJogar');
const botaoProxima = document.getElementById('btnProxima');
const divPlacar = document.getElementById("placar");
const divResultado = document.getElementById("resultado");
let turno = "jogador";

function habilita(elemento){
   elemento.disabled = false;
}

function desabilita(elemento){
   elemento.disabled = true;
}

function puxarCarta() {
   embaralharCartas(cartasJogador);
   embaralharCartas(cartasMaquina);
   cartaMaquina = cartasMaquina[0];
   cartaJogador = cartasJogador[0];
   exibeCarta("jogador");
   desabilita(botaoSortearCarta);
   desabilita(botaoProxima);
   habilita(botaoJogar);
   divResultado.innerHTML = ``;
}

function embaralharCartas(cartas){
   let novaOrdem = [];
   for(i=cartas.length;i>0;i=cartas.length){   
      let numPseudoAleatorio = Math.floor(Math.random()*cartas.length);
      novaOrdem.push(cartas[numPseudoAleatorio]);
      cartas.splice(numPseudoAleatorio,1);
   };
   cartas ===cartasJogador? cartasJogador = novaOrdem : cartasMaquina = novaOrdem;
}

function exibeCarta(quem){
   let tipoJogador = quem==="jogador"? cartaJogador : cartaMaquina;   
   let divCarta = document.getElementById(`carta-${quem}`);
   let moldura = `<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">`;      
   let nomeCarta = `<p class="carta-subtitle">${tipoJogador.nome}</p>`;
   let atributos = "";
   for (atributo in tipoJogador.atributos) {
      atributos += `<input type='radio' name='atributo-${quem}' value='${atributo}' id="${atributo}-${quem}"  class="atributo escondido"><label for="${atributo}-${quem}">${atributo}: ${tipoJogador.atributos[atributo]}</label><input type="number" class="atributo-numero-${quem} escondido" value="${tipoJogador.atributos[atributo]}">`
    };
   divCarta.style.backgroundImage = `url(${tipoJogador.imagem})`;
   divCarta.innerHTML = `${moldura + nomeCarta}<div id='opcoes' class='carta-status'> ${atributos}</div>`;
}

function jogar() { 
   let atributoSelecionado = obtemAtributoSelecionado();
   if(atributoSelecionado!==""){      
      exibeCarta("maquina");
      obtemAtributoSelecionado();
      //chamei de novo a funcao pois ela desabilita inputs
      desabilita(botaoJogar);
      habilita(botaoProxima);
      let resultado = comparaAtributos(atributoSelecionado);  
      atualizaPlacar();
      mostraResultado(resultado);
      turno ="maquina";    
   } else{
      divResultado.innerHTML = `<p class="resultado-final">Selecione um dos atributos</p>`;
   }
}

function jogarMaquina(){
   divResultado.innerHTML = `<p class="turno-maquina">Turno da máquina<p>`
   
   setTimeout(function(){
   exibeCarta("maquina");
   }, 1500);

   setTimeout(maquinaSelecionaAtributo, 3000);

   setTimeout(function (){
   let atributoSelecionado = obtemAtributoSelecionado();
   let resultado = comparaAtributos(atributoSelecionado);  
   desabilita(botaoJogar);
   habilita(botaoProxima);
   atualizaPlacar();
   mostraResultado(resultado);
   turno ="jogador";}, 4500);   
}

function maquinaSelecionaAtributo(){
   let atributosMaquina = document.getElementsByName('atributo-maquina');   
   let numerosAtributoMaquina = document.getElementsByClassName('atributo-numero-maquina');
   let arrNumeros = [];
   for(i=0;i<numerosAtributoMaquina.length;i++){
      arrNumeros.push(parseInt(numerosAtributoMaquina[i].value));
   };
   let maiorAtributo = Math.max(...arrNumeros);
   let indiceMaiorAtributo = arrNumeros.indexOf(maiorAtributo);
   atributosMaquina[indiceMaiorAtributo].checked = true;
}

function obtemAtributoSelecionado() {
   let botaoRadio = document.getElementsByClassName('atributo');
   let selecionado ="";
   let validado = false;
   for (i=0;i<botaoRadio.length;i++) {
      if (botaoRadio[i].checked) {
         validado = true;
      }
   };
   if(validado){ 
      for (i=0;i<botaoRadio.length;i++) {
         if (botaoRadio[i].checked) {
            selecionado = botaoRadio[i].value;
         }
         desabilita(botaoRadio[i]);
      }
   }
   return selecionado;
}

function comparaAtributos(atributo){
   let resultado;
   if (cartaJogador.atributos[atributo] > cartaMaquina.atributos[atributo]) {      
      cartasJogador.push(cartaMaquina);
      let posicao = cartasMaquina.indexOf(cartaMaquina);
      //estou jogando sempre com a primeira, pois embaralho, ainda assim quis fazer a funcao de encontrar o indice para praticar
      cartasMaquina.splice(cartasMaquina[posicao],1);
      resultado = "venceu";
   } else if (cartaJogador.atributos[atributo] < cartaMaquina.atributos[atributo]) {
      cartasMaquina.push(cartaJogador);
      let posicao = cartasJogador.indexOf(cartaJogador);
      cartasJogador.splice(cartasJogador[posicao],1);
      resultado = "perdeu";
   } else {
      resultado = "empatou";
   }
   return resultado;
}

function atualizaPlacar(){
   divPlacar.innerHTML = `<p class="placar">Você: ${cartasJogador.length} cartas</p><p class="placar"> Máquina: ${cartasMaquina.length} cartas</p>`;   
}

function mostraResultado(resultado){
   if(cartasJogador.length>0 && cartasMaquina.length>0){
      switch(resultado){
         case "venceu":
            divResultado.innerHTML = `<p class="resultado-final">Você venceu!</p>`;
            break;
         case "perdeu":
            divResultado.innerHTML = `<p class="resultado-final">A máquina venceu!</p>`;
            break;
         case "empatou":
            divResultado.innerHTML =`<p class="resultado-final">Empatou!</p>`;
            break;
      }
   } else{
      encerrarJogo();
   }   
}

function encerrarJogo(){
   let vencedor = cartasMaquina.length ===0? "Voce" : "A máquina";
   divResultado.innerHTML = `<p class="resultado-final">Fim do jogo. ${vencedor} venceu<p>`;
   desabilita(botaoProxima);
   botaoReiniciar.classList.remove("escondido");   
}

function proximaRodada(){
   escondeCartas();
   puxarCarta();
   if(turno==="maquina"){
      desabilita(botaoJogar);
      let radioJogador = document.getElementsByName("atributo-jogador");
      for (i=0;i<radioJogador.length;i++) {         
         desabilita(radioJogador[i]);
      }
      jogarMaquina();
   }
}

function escondeCartas(){
   let divCartaJogador = document.getElementById(`carta-jogador`);
   let divCartaMaquina = document.getElementById(`carta-maquina`);
   divCartaJogador.style.backgroundImage = ``;
   divCartaMaquina.style.backgroundImage = ``;
   let cartaVirada = `<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">`;
   divCartaJogador.innerHTML = cartaVirada;
   divCartaMaquina.innerHTML = cartaVirada;
}

function reiniciarJogo(e){
   e.preventDefault();
   cartasGeral.push(...cartasMaquina, ...cartasJogador);
   escondeCartas();
   cartasMaquina=[];
   cartasJogador=[];
   divPlacar.innerHTML=``;
   for(i=cartasGeral.length;i>0;i=cartasGeral.length){   
      let numPseudoAleatorio = Math.floor(Math.random()*cartasGeral.length);
      switch(cartasGeral.length%2===0){
         case true:
            cartasMaquina.push(cartasGeral[numPseudoAleatorio]);
            break;
         case false:
            cartasJogador.push(cartasGeral[numPseudoAleatorio]);
            break;
      }
      cartasGeral.splice(numPseudoAleatorio,1);
   };
   puxarCarta();
   botaoReiniciar.classList.add("escondido");
}