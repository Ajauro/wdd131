//declare 3 variaveis que contem referencias aos elementos input, button e list
const input = document.querySelector("input");
const button = document.querySelector("button");
const list = document.querySelector("___________");//you need to fill in the blank to reference the HTML element that is a unordered list element.

//crie um <li> elemento que terá o titulo do capitulo de cada entrada e um botão de exclusão associado
const listBOM = document.createElement("li");
//crie uma exclusão button
const deleteButton = document.createElement("button");
//preencha a <li> variavel do elemento textContent ou innerHTML com o valor de entrada
listBOM.textContent = input.value;
//preencha o botão textContent com um X
deleteButton.textContent = "❌";
//anexe a variavel do elemento <li> com o botão excluir
listBOM.append(deleteButton);
//anexe a variavel do elemento li a lista não ordenada em seu HTML
list.append(listBOM);
