import { exibirOsLivrosNaTela } from "./metodoForEach";

const ordenarPreco = document.getElementById('btnOrdenarPorPreco');
ordenarPreco.addEventListener('click', ordenarPelosPrecos);

export function ordenarPelosPrecos() {
   const precosOrdenados = livros.sort((a, b) => b.preco - a.preco);
   exibirOsLivrosNaTela(precosOrdenados);
}
