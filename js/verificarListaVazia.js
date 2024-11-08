const msgListaVazia = document.getElementById("msg-item-lista-vazia");

export function verificarListaVazia(lista) {
  console.log(lista);
  
  if(lista.querySelectorAll("li").length === 0){
    msgListaVazia.style.display = "block";
  } else {
    msgListaVazia.style.display = "none";
  }
}