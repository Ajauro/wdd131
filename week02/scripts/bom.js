
//declare 3 variaveis que contem referencias aos elementos input, button e list
const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");//you need to fill in the blank to reference the HTML element that is a unordered list element.


//crie um ouvinte de evento de clique para o botão add chapter usando um addEventListener.
button.addEventListener ("click", function() {

    if (input.value.trim() !== ""){ //o trim() metodo remove espaços em branco de ambas as extremidades desta string e retorna uma nova string, sem modificar  string original.
        //crie um <li> elemento que terá o titulo do capitulo de cada entrada e um botão de exclusão associado
        const li = document.createElement("li");
        //crie uma exclusão button
        const deleteButton = document.createElement("button");
        //preencha a <li> variavel do elemento textContent ou innerHTML com o valor de entrada
        li.textContent = input.value;
        //preencha o botão textContent com um X
        deleteButton.textContent = "❌";
        //anexe a variavel do elemento <li> com o botão excluir
        li.append(deleteButton);
        //anexe a variavel do elemento li a lista não ordenada em seu HTML
        list.append(li);
        //adicione um ouvinte do evento no botão de exclusao que remove quando o li é clicado
        deleteButton.addEventListener("click", function() {
            list.removeChild(li);
            input.focus();
        });
        //limpe o valor do input e foque nele novamente
        input.value = "";
        input.focus();
    }
});
