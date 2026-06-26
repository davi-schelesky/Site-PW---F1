const botaoVoltar = document.getElementById("prev");
const botaoPassar = document.getElementById("next");
const itens = document.querySelectorAll(".carrossel");
const galeria = document.getElementById("galeria");
const barulhoCarro = document.getElementById("audioCarro");
const btnMobile = document.getElementById("btn-mobile");
const nav = document.querySelector("nav");

let active = 0;
const total = itens.length;

botaoVoltar.addEventListener('click', () => {
    update(-1);
});

botaoPassar.addEventListener('click', () => {
    update(1);
});

function update(direcao){
    document.querySelector(".carrossel.active").classList.remove("active");
    
    if(direcao > 0){
        active = active + 1;

        if(active === total){
            active = 0;
        }
    }
    else if(direcao < 0){
        active = active - 1;

        if(active < 0){
            active = total - 1;
        }
    }

    itens[active].classList.add("active");
};

const myObserver = new IntersectionObserver((elemento) => {
    elemento.forEach((elemento) => {
        if(elemento.isIntersecting){
            elemento.target.classList.add("show");
        }
        else{
            elemento.target.classList.remove("show");
        }
    })
});
const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
    myObserver.observe(card);
});

function tocarAudio(){
    barulhoCarro.currentTime = 0;
    barulhoCarro.play();
};
function pararAudio(){
    barulhoCarro.pause();
};

btnMobile.addEventListener('click', () => {
    nav.classList.toggle("active");
});