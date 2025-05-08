const elementosParaInserirLivros = document.getElementById('livros');
const valorLivros = document.getElementById('valor_total_livros_disponiveis');

export function exibirOsLivrosNaTela(listaDeLivros) {
    valorLivros.innerHTML = '';
    elementosParaInserirLivros.innerHTML = "";
    listaDeLivros.forEach(livro => {
        let disponibilidade = livro.quantidade > 0 ? 'livro__imagens' : 'livro__imagens indisponivel';
        elementosParaInserirLivros.innerHTML += 
        `<div class="livro">
        <img class="l${disponibilidade}" src="${livro.imagem}" alt="${livro.alt}" />
        <h2 class="livro__titulo"> 
        ${livro.titulo}
        </h2>
        <p class="livro__descricao">${livro.autor}</p>
        <p class="livro__preco" id="preco">R$${livro.preco.toFixed(2)}</p>
        <div class="tags">
            <span class="tag">${livro.categoria}</span>
        </div>
        </div>`     
    })
}

