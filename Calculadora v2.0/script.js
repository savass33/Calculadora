function calcular(valor1, valor2) {

    // Obtém o operador selecionado no elemento <select> com id="operadores"
    var operador = document.getElementById("operadores").options[document.getElementById("operadores").selectedIndex].value;

    // Obtém os valores dos campos de entrada identificados por valor1 e valor2, armazenando-os nas variáveis num1 e num2
    var num1 = document.getElementById(valor1).value;
    var num2 = document.getElementById(valor2).value;

    if (num1 == "" && num2 == "") {
        window.alert("Nenhum número foi inserido.") // Caso nenhum número seja inserido
    } else if (operador == "%") {
        {
            function porcentagem(num1, num2) {
                if (num2 == "") {
                    return num1 / 100
                } else {
                    return num1 / 100 * num2
                }
            }
            document.getElementById("res").innerHTML = "Carregando..." // Imprime uma mensagem "Carregando..." antes de exibir o resultado
            setTimeout(() => { // Adiciona um timer de 1s (1000ms) para o comando ser executado.            
                document.getElementById("res").innerHTML = "Resultado:" + porcentagem(num1, num2) // Atualiza o conteúdo da div com id="res" para mostrar o resultado da operação
            }, 1000);
        }
    } else if (operador == "!") {
        window.alert("Desconsiderando dados da segunda caixa...")
        function fatorar(num1) {
            if (num1 < 0)
                return -1;
            else if (num1 == 0)
                return 1;
            else {
                return (num1 * fatorar(num1 - 1));
            }
        }
        document.getElementById("res").innerHTML = "Carregando..." // Imprime uma mensagem "Carregando..." antes de exibir o resultado
        setTimeout(() => { // Adiciona um timer de 1s (1000ms) para o comando ser executado.            
            document.getElementById("res").innerHTML = "Resultado:" + fatorar(num1) // Atualiza o conteúdo da div com id="res" para mostrar o resultado da operação
        }, 1000);
    }
    else if (operador == "sqr") {
        function raiz(num1) {
            if (num2 == "2") {
                if (num1 < 0)
                    alert("Número Inválido, digite um número positivo.");
                else {
                    return Math.sqrt(num1)
                }
            } else if (num2 == "3") {
                if (num1 < 0)
                    alert("Número Inválido, digite um número positivo.");
                else {
                    return Math.cbrt(num1)
                }
            }
        }
        document.getElementById("res").innerHTML = "Carregando..." // Imprime uma mensagem "Carregando..." antes de exibir o resultado
        setTimeout(() => { // Adiciona um timer de 1s (1000ms) para o comando ser executado.            
            document.getElementById("res").innerHTML = "Resultado:" + raiz(num1) // Atualiza o conteúdo da div com id="res" para mostrar o resultado da operação
        }, 1000);

    } else if (operador == "pot") {
        function potencia(num1) {
            return num1 ** num2
        }
        document.getElementById("res").innerHTML = "Carregando..." // Imprime uma mensagem "Carregando..." antes de exibir o resultado
        setTimeout(() => { // Adiciona um timer de 1s (1000ms) para o comando ser executado.            
            document.getElementById("res").innerHTML = "Resultado:" + potencia(num1) // Atualiza o conteúdo da div com id="res" para mostrar o resultado da operação
        }, 1000);

    }
    else { // Avalia o operador e executa a operação correspondente
        switch (operador) {
            case "+":
            case "-":
            case "/":
            case "*":
                var resultadoexpressao = num1 + operador + num2;

                //O método eval realiza uma operaçao de strings e retorna o resultado no tipo number
                resultado = eval(resultadoexpressao); break;
        }

        document.getElementById("res").innerHTML = "Carregando..."

        // Adiciona um timer de 1s (1000ms) para o comando ser executado.
        setTimeout(() => {

            // Atualiza o conteúdo da div com id="res" para mostrar o resultado da operação
            document.getElementById("res").innerHTML = "Resultado:" + resultado
        }, 1000);

    }

}

// Limpa os campos de entrada identificados por valor1 e valor2
function Limpar(valor1, valor2) {
    document.getElementById(valor1).value = "";
    document.getElementById(valor2).value = "";
    document.getElementById("res").innerHTML = "";
}

function verifica() {
    const selectElement = document.getElementById('operadores');
    const selectedValue = selectElement.value;

    if (selectedValue === '%') {
        alert("A função de porcentagem funciona assim: calcula-se o primeiro número por cento do segundo número.");
    } else if (selectedValue === 'sqr') {
        alert("Essa função funciona apenas para a Raíz Quadrada ou Cúbica do primeiro número. Para raíz quadrada: digite 2 no segundo campo. Para a raíz cúbica: digite 3 no segundo campo.")
    } else if (selectedValue === 'pot') {
        alert("A função potência funciona da seguinte forma: o primeiro número é a base e o segundo número o expoente.")
    }
}