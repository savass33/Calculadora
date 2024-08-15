function calcular(valor1, valor2) {
    // Obtém o operador selecionado no elemento <select> com id="operadores"
    var operador = document.getElementById("operadores").options[document.getElementById("operadores").selectedIndex].value;

    // Obtém os valores dos campos de entrada identificados por valor1 e valor2, armazenando-os nas variáveis num1 e num2
    var num1 = document.getElementById(valor1).value;
    var num2 = document.getElementById(valor2).value;
    var result = document.getElementById("res") // Referência ao elemento onde o resultado será exibido

    if (num1 == "" && num2 == "") {
        window.alert("Nenhum número foi inserido.") // Caso nenhum número seja inserido
    }
    // Exibe mensagem de carregamento enquanto o resultado é calculado
    result.innerHTML = "Carregando...";

    // Função para calcular porcentagem
    function porcentagem(num1, num2) {
        return num2 ? (num1 / 100) * num2 : num1 / 100;
    }

    // Função para calcular fatorial
    function fatorar(num1) {
        if (num1 < 0) return -1; // Retorna -1 se o número for negativo
        if (num1 === 0) return 1; // Retorna 1 se o número for 0
        return num1 * fatorar(num1 - 1); // Calcula o fatorial
    }

    // Função para calcular raízes quadrada e cúbica
    function raiz(num1, num2) {
        if (num1 < 0) {
            alert("Número Inválido, digite um número positivo."); // Alerta se o número for negativo
            return;
        } if (num2 == "2") {
            return Math.sqrt(num1)
        } if (num2 == "3") {
            return Math.cbrt(num1)
        } else if (num2 != "2" && num2 != "3") {
            alert("Número Inválido, digite 2 ou 3."); // Alerta se o número for negativo
        }
    }

    // Função para calcular potência
    function potencia(num1, num2) {
        return num1 ** num2;
    }

    let resultado;
    // Calcula o resultado com base no operador selecionado
    switch (operador) {
        case "%":
            resultado = porcentagem(num1, num2); // Calcula porcentagem
            break;
        case "!":
            resultado = fatorar(num1); // Calcula fatorial
            break;
        case "sqr":
            resultado = raiz(num1, num2); // Calcula raiz
            break;
        case "pot":
            resultado = potencia(num1, num2); // Calcula potência
            break;
        case "+":
        case "-":
        case "*":
        case "/":
            // Avalia a expressão matemática para operadores aritméticos
            resultado = eval(`${num1} ${operador} ${num2}`);
            break;
    }

    // Atualiza o conteúdo da div com id="res" após um atraso de 1 segundo
    setTimeout(() => {
        result.innerHTML = `Resultado: ${resultado}`;
    }, 1000);
}

// Função para limpar os campos de entrada e o resultado
function Limpar(valor1, valor2) {
    document.getElementById(valor1).value = ""; // Limpa o valor do primeiro campo
    document.getElementById(valor2).value = ""; // Limpa o valor do segundo campo
    document.getElementById("res").innerHTML = ""; // Limpa o resultado exibido
}

function verifica() {
    const selectElement = document.getElementById('operadores');
    const selectedValue = selectElement.value;

    switch (selectedValue) {
        case "%": alert("A função de porcentagem funciona assim: calcula-se o primeiro número por cento do segundo número."); break;
        case "sqr": alert("Essa função funciona apenas para a Raíz Quadrada ou Cúbica do primeiro número. Para raíz quadrada: digite 2 no segundo campo. Para a raíz cúbica: digite 3 no segundo campo."); break;
        case "pot": alert("A função potência funciona da seguinte forma: o primeiro número é a base e o segundo número o expoente."); break;
    }
}