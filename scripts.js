import { adicionarItem } from './js/addItem.js';

const botaoSalvarItem = document.getElementById("adicionar-botao");

// primeiro valor é o evento que vai acontecer, depois a função
botaoSalvarItem.addEventListener("click", adicionarItem)