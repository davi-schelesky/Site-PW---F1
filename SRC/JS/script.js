const imagens = [
    "foto-galeria-ayrton.webp",
    "foto-galeria-bortoleto.jpg",
    "foto-galeria-felipeMassa.jpg"
];
let indiceAtual = 0;

function mudarImagem(direcao){
    indiceAtual += direcao;

    if(indiceAtual < 0){
        indiceAtual = imagens.length - 1;
    }
    else if(indiceAtual >= imagens.length){
        indiceAtual = 0;
    }
    document.getElementById("imgAtual").src = "./SRC/assets/" + imagens[indiceAtual];
}