inputs = document.getElementsByClassName("selectors")
let c_input;

for (let input in inputs) {
    if(input == "item")
        break;

    console.log(inputs[input])
    
    inputs[input].addEventListener("input", function() {
        value = inputs[input].value;

        if (value < 0)
            value = 0

        console.log(input + " : "+ value)
    })
}