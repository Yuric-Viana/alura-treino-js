const endpointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';
let livros = [];
getEndpoint();

async function getEndpoint() {
    const res = await fetch(endpointDaAPI);
    livros = await res.json();

    exibirLivrosDoCarrinho(livrosNoCarrinho);
    exibirValorCarrinho(livrosNoCarrinho);
}

const livrosNoCarrinho = [
    { 
        nome: 'Vue.js: Construa aplicações incríveis', 
        preco: 30,
        autor: 'Caio Incau', 
        imagem: 'https://caelum-online-public.s3.amazonaws.com/2628-js/JavaScript.png' },
    { 
        nome: 'HTML5 e CSS3: Domine a web do futuro',
        preco: 20,
        autor: 'Lucas Mazza',
        imagem: 'https://caelum-online-public.s3.amazonaws.com/2628-js/htmlcss.png'  
    }, 
    { 
        nome: 'Guia Front-End: O caminho das pedras para ser um dev Front-End', 
        preco: 25, 
        autor: 'Diego Eis',
        imagem: 'https://caelum-online-public.s3.amazonaws.com/2628-js/guia.png'  }
];

const inserirLivros = document.getElementById('livros');

function exibirLivrosDoCarrinho(listaDeLivros) {
    listaDeLivros.forEach(livro => {
        inserirLivros.innerHTML += ` 
            <div class="livro">
              <img class="livro__imagens" src="${livro.imagem}" alt="Capa do livro Cangaceiro JavaScript" style="margin-top: 5em" />
              <h2 class="livro__titulo">
                ${livro.nome}
              </h2>
              <p class="livro__descricao">${livro.autor}</p>
              <p class="livro__preco" id="preco">R$${livro.preco}</p>
              <div class="tags">
                <span class="tag">Front-end</span>
              </div>
            </div>`
    });
}

function valorCarrinho(livros) {
    return livros.reduce((acc, livros) => acc + livros.preco, 0).toFixed(2);
}

const valorLivros = document.getElementById('valor_total_livros_disponiveis');

function exibirValorCarrinho(livro) {
    valorLivros.innerHTML += `<div class="livros__disponiveis">
      <p>Todos os livros disponíveis por R$ <span id="valor">${valorCarrinho(livro)}</span></p>
    </div>`
}