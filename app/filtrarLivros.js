import { exibirOsLivrosNaTela } from "./metodoForEach.js";

const valorLivros = document.getElementById('valor_total_livros_disponiveis');
const livrosPorPreco = document.getElementById('btnOrdenarPorPreco');

// Exporta uma função que retorna outra função (closure)
export function filtrarLivros(livros) {
    return function() {
        const elementoBtn = document.getElementById(this.id);
        const categoria = elementoBtn.value;
        
        let livrosFiltrados = categoria == 'disponivel' ? exibirLivrosDisponiveis(livros) : livros.filter(livro => livro.categoria == categoria);
        exibirOsLivrosNaTela(livrosFiltrados);
        if( categoria == 'disponivel') {
            valorLivros.innerHTML = `<div class="livros__disponiveis">
            <p>Todos os livros disponíveis por R$ <span id="valor">${exibeValorTotal(livrosFiltrados)}</span></p>
            </div>`
        } else {
            valorLivros.innerHTML = `<div class="livros__disponiveis">
            <p>Todos os livros disponíveis por R$ <span id="valor">${exibeValorTotal(livrosFiltrados)}</span></p>
            </div>`
        }

        livrosPorPreco.addEventListener('click', (evento) => {
            valorLivros.innerHTML = `<div class="livros__disponiveis">
            <p>Todos os livros disponíveis por R$ <span id="valor">${exibeValorTotal(livros)}</span></p>
            </div>`
        })
    }
}

function exibirLivrosDisponiveis(livros) {
    return livros.filter(livro => livro.quantidade > 0);
}

function exibeValorTotal(livros) {
    return livros.reduce((acc, livro) => acc + livro.preco, 0).toFixed(2);
}