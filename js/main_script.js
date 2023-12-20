let inputs = document.getElementsByClassName("inputs")
let square = document.getElementById("square");
let reset = document.getElementById("reset");
let metrics = document.getElementById("metrics-id");
let cp = document.getElementById("clipboard");
let metric = metrics.value + " "
let borders = [0, 0, 0, 0];
let border_string;


let c_input;

function updateSquare() { // atualiza o quadrado do preview com os valores atuais na variavel border
    border_string = borders[0] + metric + borders[1] + metric + borders[3] + metric + borders[2] + metric;
    square.style.borderRadius = border_string;
    // console.log(border_string); // debug
}

function updateBorders(value, input) { // atualiza a variavel border com o valor do seletor sendo mexido no html
    borders[input] = value;
}

metrics.addEventListener('input', function() { // atualiza variavel metric com o valor que o usuario selecionar
    metric = metrics.value + " "
    updateSquare();
})

for (let input in inputs) { // funcao que cuida dos inputs que controlam as bordas do quadrado
    if (input == "item") break;

    borders[input] = inputs[input].value;
    updateSquare(); // atualiza o quadrado do meio com os valores carregados na pagina

    inputs[input].addEventListener('input', function() {
        if (inputs[input].value < 0) inputs[input].value = 0; // impede que um valor menor que 0 seja colocado no seletor

        // atualiza a variavel border e o quadrado
        let value = inputs[input].value;
        updateBorders(value, input);
        updateSquare();
    })
}

cp.addEventListener('click', function() { // event listener para copiar os dados para clipboard do user
    navigator.clipboard.writeText("border-radius: " + border_string.trim() + ";");
})


reset.addEventListener('click', function() { // reseta os valores
    for (let input in inputs) {
        if (input == "item") break;

        inputs[input].value = 0;
        updateBorders(inputs[input].value, input);
    }

    updateSquare();
})
