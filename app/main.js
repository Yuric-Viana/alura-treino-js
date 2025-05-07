import {exibirOsLivrosNaTela} from "./metodoForEach.js";
import {aplicarDesconto} from './metodoMap.js';
// import {filtrarLivros} from "./filtrarLivros.js";

let livros = [];
const endpointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';
getBuscarLivrosDaAPI();

async function getBuscarLivrosDaAPI() {
    const res = await fetch(endpointDaAPI);
    livros = await res.json();
    let livrosComDesconto = aplicarDesconto(livros);
    const exibirLivros = exibirOsLivrosNaTela(livrosComDesconto);
    // const exibirLivrosFiltrados = filtrarLivros(livros);
}
 
const botoes = document.querySelectorAll('.btn');
botoes.forEach(btn => btn.addEventListener('click', filtrarLivros));

function filtrarLivros() {
    const elementoBtn = document.getElementById(this.id);
    let categoria = elementoBtn.value;

    let livrosFiltrados = livros.filter(livro => livro.categoria == categoria);
    exibirOsLivrosNaTela(livrosFiltrados);
}

const ordenarPreco = document.getElementById('btnOrdenarPorPreco');
ordenarPreco.addEventListener('click', ordenarPelosPrecos);

function ordenarPelosPrecos() {
   const precosOrdenados = livros.sort((a, b) => b.preco - a.preco);
   exibirOsLivrosNaTela(precosOrdenados);
}
