import { exibirOsLivrosNaTela } from "./metodoForEach.js";
import { aplicarDesconto } from './metodoMap.js';
import { filtrarLivros } from "./filtrarLivros.js";
// import { ordenarPelosPrecos } from "./metodoSort.js";

let livros = [];
const endpointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';
getBuscarLivrosDaAPI();

async function getBuscarLivrosDaAPI() {
    const res = await fetch(endpointDaAPI);
    livros = await res.json();
    let livrosComDesconto = aplicarDesconto(livros);
    exibirOsLivrosNaTela(livrosComDesconto);

    configurarEventListeners();
}

function configurarEventListeners() {
    // Filtrar por categoria
    const botoes = document.querySelectorAll('.btn');
    botoes.forEach(btn => btn.addEventListener('click', filtrarLivros(livros)));

    // Ordenar por preço
    const ordenarPreco = document.getElementById('btnOrdenarPorPreco');
    ordenarPreco.addEventListener('click', ordenarPelosPrecos);
}

function ordenarPelosPrecos() {
    const precosOrdenados = livros.sort((a, b) => b.preco - a.preco);
    exibirOsLivrosNaTela(precosOrdenados);
}
