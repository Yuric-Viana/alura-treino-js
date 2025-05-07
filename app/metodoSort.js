import { exibirOsLivrosNaTela } from "./metodoForEach";

const ordenarPreco = document.getElementById('btnOrdenarPorPreco');
ordenarPreco.addEventListener('click', ordenarPelosPrecos);

export function ordenarPelosPrecos(livro) {
   return function() {
      const precosOrdenados = livro.sort((a, b) => b.preco - a.preco);
      exibirOsLivrosNaTela(precosOrdenados);
   }
}
