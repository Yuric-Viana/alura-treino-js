import { exibirOsLivrosNaTela } from "./metodoForEach.js";

// Exporta uma função que retorna outra função (closure)
export function filtrarLivros(livros) {
    return function() {
        const elementoBtn = document.getElementById(this.id);
        const categoria = elementoBtn.value;
        
        let livrosFiltrados = livros.filter(livro => livro.categoria == categoria);
        exibirOsLivrosNaTela(livrosFiltrados);
    }
}