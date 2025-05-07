import { exibirOsLivrosNaTela } from "./metodoForEach";

const botoes = document.querySelectorAll('.btn');
botoes.forEach(btn => btn.addEventListener('click', filtrarLivros));

export function filtrarLivros(livros) {
    const elementoBtn = document.getElementById(this.id);
    let categoria = elementoBtn.value;

    let livrosFiltrados = livros.filter(livro => livro.categoria == categoria);
    exibirOsLivrosNaTela(livrosFiltrados);
}