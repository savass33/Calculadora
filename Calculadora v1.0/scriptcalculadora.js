function calcular(valor1, valor2) {

    // Obtém o operador selecionado no elemento <select> com id="operadores"
    var operador = document.getElementById("operadores").options[document.getElementById("operadores").selectedIndex].value;

    // Obtém os valores dos campos de entrada identificados por valor1 e valor2, armazenando-os nas variáveis num1 e num2
    var num1 = document.getElementById(valor1).value; 
    var num2 = document.getElementById(valor2).value;

    // Avalia o operador e executa a operação correspondente
    switch (operador) {
        case "+":
        case "-":
        case "/":
        case "*":
            var resultadoexpressao = num1 + operador + num2;

            //O método eval realiza uma operaçao de strings e retorna o resultado no tipo number
            resultado = eval(resultadoexpressao); break;
    }

    // Atualiza o conteúdo da div com id="res" para mostrar o resultado da operação
    document.getElementById("res").innerHTML = "Resultado: " + resultado;
}

// Limpa os campos de entrada identificados por valor1 e valor2
function Limpar(valor1, valor2) {
    document.getElementById(valor1).value = "";
    document.getElementById(valor2).value = "";
}	