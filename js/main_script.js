let inputs = document.getElementsByClassName("selectors")
let square = document.getElementById("square");
let borders = [0, 0, 0, 0];

let c_input;

function updateSquare(value, input) {
    borders[input] = value;

    let border_string = borders[0] + "px " + borders[1] + "px " + borders[2] + "px " + borders[3] + "px ";
    square.style.borderRadius = border_string;
}

for (let input in inputs) {
    if (input == "item")
        break;

    inputs[input].value = 0;

    inputs[input].addEventListener("input", function() {
        if (inputs[input].value < 0)
            inputs[input].value = 0;

        let value = inputs[input].value;
        // console.log(input + ":" + value);
        updateSquare(value, input);
    })
}
