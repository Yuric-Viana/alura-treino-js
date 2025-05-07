import { exibirOsLivrosNaTela } from "./metodoForEach.js";

// Exporta uma função que retorna outra função (closure)
export function filtrarLivros(livros) {
    return function() {
        const elementoBtn = document.getElementById(this.id);
        const categoria = elementoBtn.value;
        
        let livrosFiltrados = categoria == 'disponivel' ? exibirLivrosDisponiveis(livros) : livros.filter(livro => livro.categoria == categoria);
        exibirOsLivrosNaTela(livrosFiltrados);
    }
}

function exibirLivrosDisponiveis(livros) {
    return livros.filter(livro => livro.quantidade > 0);
}