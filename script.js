var nomes = ["Diego", "Gabriel", "Lucas"];

var listElement = document.createElement("ul");
var inputElement = document.getElementById("inputText");
var body = document.body;

function adicionar() {

    listElement.innerHTML = '';

    var textInput = inputElement.value;
    nomes.push(textInput);
    inputElement.value = null;

    adicionarTodos();
}

function adicionarTodos(){
    
    for (nome of nomes) {
        var itemListElement = document.createElement("li");
        var textNome = document.createTextNode(nome);

        itemListElement.appendChild(textNome);
        listElement.appendChild(itemListElement);
    }
}

adicionarTodos();
body.appendChild(listElement);