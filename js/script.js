// toggle menu

const calculatorToggle = document.getElementById("calculatorToggle");
console.log(calculatorToggle);

calculatorToggle.addEventListener("change", () => {
    if (calculatorToggle.checked) {
        document.getElementById("sectionCalculator").className = "show-section"
    } else {
        document.getElementById("sectionCalculator").className = ""
    }
})


// Calculator section

function sumarNumeros() {
    const num1 = parseFloat(document.getElementById("number1").value);
    const num2 = parseFloat(document.getElementById("number2").value);

    const resultado = num1 + num2;

    if (resultado || resultado === 0) {
        document.getElementById("resultadoCalculadora").innerText = resultado;
    }
}

const restarNumeros = () => {
    const num1 = parseFloat(document.getElementById("number1").value);
    const num2 = parseFloat(document.getElementById("number2").value);

    const resultado = num1 - num2;

    if (resultado || resultado === 0) {
        document.getElementById("resultadoCalculadora").innerText = resultado;
    }
}

const botonRestar = document.getElementById("botonRestar");

botonRestar.addEventListener("click", restarNumeros)