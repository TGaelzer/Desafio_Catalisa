const imagem1 = document.querySelector('#img1');
const imagem2 = document.querySelector('#img2');
const imagem3 = document.querySelector('#img3');
const botao = document.querySelector('#botao');
const nomeDoPersonagem1 = document.querySelector ('#nome');
const nomeDoPersonagem2 = document.querySelector ('#nome2');
const nomeDoPersonagem3 = document.querySelector ('#nome3');
const especieDoPersonagem1 = document.querySelector ('#especie');
const especieDoPersonagem2 = document.querySelector ('#especie2');
const especieDoPersonagem3 = document.querySelector ('#especie3');
const statusVida1 = document.querySelector ('#status');
const statusVida2 = document.querySelector ('#status2');
const statusVida3 = document.querySelector ('#status3');
var imagens = ['#img1', '#img2', '#img3']


gerarValorAleatorio = () => {
    return Math.floor(Math.random() * 671);
}

pegarPersonagem1 = () => {  
    let numeroAleatorio = gerarValorAleatorio();
    return fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio}`, {
        method:'GET',
        headers: {
            Accept: 'application/json',
            "Content-type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {
        imagem1.src = data.image;
        imagem1.alt = data.name;
        nomeDoPersonagem1.innerHTML = data.name;
        especie1.innerHTML = data.species;
        statusVida1.innerHTML = data.status;
    });
}


pegarPersonagem2 = () => {  
    let numeroAleatorio = gerarValorAleatorio();
    return fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio}`, {
        method:'GET',
        headers: {
            Accept: 'application/json',
            "Content-type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {
        imagem2.src = data.image;
        imagem2.alt = data.name;
        nomeDoPersonagem2.innerHTML = data.name;
        especie2.innerHTML = data.species;
        statusVida2.innerHTML = data.status;
    });
}

pegarPersonagem3 = () => {  
    let numeroAleatorio = gerarValorAleatorio();
    return fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio}`, {
        method:'GET',
        headers: {
            Accept: 'application/json',
            "Content-type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {
        imagem3.src = data.image;
        imagem3.alt = data.name;
        nomeDoPersonagem3.innerHTML = data.name;
        especie3.innerHTML = data.species;
        statusVida3.innerHTML = data.status;
    });
}

botao.onclick = pegarPersonagem1(), pegarPersonagem2(), pegarPersonagem3();
