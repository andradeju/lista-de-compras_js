export const editarItem = (elemento) => {
  let novoItem = prompt("Digite o novo nome do item:");

  if(novoItem !== null && novoItem.trim() !== "") {
    const itemTxtAtualizado = elemento.querySelector("#item-titulo");
    const dataAtualizada = elemento.querySelector(".item-data-hora");

    itemTxtAtualizado.textContent = novoItem;
    dataAtualizada.textContent = `${new Date().toLocaleDateString("pt-BR", { weekday: "long" })} (${new Date().toLocaleDateString()}) às ${new Date().toLocaleTimeString("pt-BR", {hour: "numeric", minute: "numeric" })} `;

    const jaComprado = elemento.querySelector(".checkbox-input").checked;

    if(jaComprado) {
      elemento.querySelector(".checkbox-input").checked = true;
      elemento.querySelector(".checkbox-customizado").classList.add("checked");
      itemTxtAtualizado.style.textDecoration = "line-through";
    }
  }
}