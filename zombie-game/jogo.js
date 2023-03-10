let altura = 0;
let largura = 0;
let vidas = 1;
let tempo = 10;

function ajustaTamanho(){
    altura = window.innerHeight;
    largura = window.innerWidth;
}

ajustaTamanho()

let cronometro = setInterval(function(){
    tempo -= 1;

    if(tempo < 0 ) {
        window.location.href = 'vitoria.html'
        clearInterval(cronometro);
        clearInterval(criarZumbi);
    } else {
        document.getElementById('cronometro').innerHTML = tempo;
    }
}, 1000);
      

function posicaoRandomica() {

    // REMOVER O ZUMBI ANTERIOR (CASO EXISTA)
    if(document.getElementById('zumbi')) {
        document.getElementById('zumbi').remove();

        if (vidas > 3) {
            window.location.href ='fim_jogo.html'
        } else {
            document.getElementById('vida' + vidas).src = "imagens/coracao_vazio.png";
            vidas++
        }
    }   

    let posicaoX = Math.floor(Math.random() * largura) - 90;
    let posicaoY = Math.floor(Math.random() * altura) - 90;

    posicaoX = posicaoX < 0 ? 0 : posicaoX;
    posicaoY = posicaoY < 0 ? 0 : posicaoY;

    //CRIAR ELEMENTO HTML COM DOM
    let zumbi = document.createElement('img');
    zumbi.src = 'imagens/zumbi.png';
    zumbi.className = tamanhoAleatorio() + ' ' + ladoAleatorio();
    zumbi.style.left = posicaoX + 'px';
    zumbi.style.top = posicaoY + 'px';
    zumbi.style.position = 'absolute';
    zumbi.id = 'zumbi' 
    zumbi.onclick = function() {
        this.remove();
    }

    document.body.appendChild(zumbi);
}

function tamanhoAleatorio(){
    let classe = Math.floor(Math.random() * 3);
    
    switch(classe){
        case 0:
            return 'zumbi1';
        case 1:
            return 'zumbi2';
        case 2:
            return 'zumbi3';
        
    }
}

function ladoAleatorio(){
    let classe = Math.floor(Math.random() * 2);
    
    switch(classe){
        case 0:
            return 'ladoA';
        case 1:
            return 'ladoB';
    }
}