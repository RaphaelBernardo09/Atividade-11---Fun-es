function multiplicacao(num1, num2) {
    const resultado = num1 * num2;
    return resultado;
  }
  
  const num1 = parseInt(prompt("Digite o primeiro número inteiro para a multiplicação:"));
  const num2 = parseInt(prompt("Digite o segundo número inteiro para a multiplicação:"));
  const resultadoMultiplicacao = multiplicacao(num1, num2);
  alert(`O resultado da multiplicação de ${num1} e ${num2} é: ${resultadoMultiplicacao}`);
  
  function calcularPotencia(base, expoente) {
    return Math.pow(base, expoente);
  }
  
  const basePotencia = parseInt(prompt("Digite a base para a potência:"));
  const expoentePotencia = parseInt(prompt("Digite o expoente para a potência:"));
  const resultadoPotencia = calcularPotencia(basePotencia, expoentePotencia);
  alert(`O resultado de ${basePotencia} elevado a ${expoentePotencia} é: ${resultadoPotencia}`);
  
  function obterQuantidadeNumeros() {
    return parseInt(prompt("Por favor, digite a quantidade de números a serem somados:"));
  }
  
  function obterNumeros(quantidadeNumeros) {
    let numeros = [];
  
    for (let i = 0; i < quantidadeNumeros; i++) {
      let numero = parseFloat(prompt(`Digite o ${i + 1}º número:`));
      numeros.push(numero);
    }
  
    return numeros;
  }
  
  function calcularSomaEMedia(numeros) {
    let soma = numeros.reduce((acc, num) => acc + num, 0);
    let media = soma / numeros.length;
    return { soma, media };
  }
  
  let quantidadeNumerosSoma = obterQuantidadeNumeros();
  let numerosSoma = obterNumeros(quantidadeNumerosSoma);
  let { soma, media } = calcularSomaEMedia(numerosSoma);
  alert(`Soma dos números que você escolheu: ${soma}\nMédia dos números que você escolheu: ${media}`);
  
  function obterIntervalo() {
    let x = parseInt(prompt("Por favor, digite o primeiro número inteiro para o intervalo:"));
    let y = parseInt(prompt("Por favor, digite o segundo número inteiro (maior que o primeiro Número) para o intervalo:"));
  
    return { x, y };
  }
  
  function calcularSomaImparesNoIntervalo(x, y) {
    let somaImpares = 0;
  
    for (let i = x; i <= y; i++) {
      if (i % 2 !== 0) {
        somaImpares += i;
      }
    }
  
    return somaImpares;
  }
  
  let { x: intervaloX, y: intervaloY } = obterIntervalo();
  
  if (intervaloX >= intervaloY || isNaN(intervaloX) || isNaN(intervaloY)) {
    alert("Erro: Um número deve ser maior do que o outro.");
  } else {
    let somaImpares = calcularSomaImparesNoIntervalo(intervaloX, intervaloY);
    alert(`A soma dos números ímpares no intervalo [${intervaloX}, ${intervaloY}] é igual à: ${somaImpares}`);
  }
  
  function simularCompra() {
    const saldoInicial = parseFloat(prompt("Digite o saldo inicial:"));
    const valorCompra = parseFloat(prompt("Digite o valor da compra:"));
  
    if (!isNaN(saldoInicial) && !isNaN(valorCompra)) {
      if (valorCompra <= saldoInicial) {
        const novoSaldo = saldoInicial - valorCompra;
        alert(`Compra realizada com sucesso! Novo saldo: R$${novoSaldo.toFixed(2)}`);
      } else {
        alert("Saldo insuficiente!");
      }
    } else {
      alert("Por favor, digite números válidos.");
    }
  }
  
  simularCompra();

  function calcularOperacao() {
    const a = parseFloat(prompt("Digite o primeiro número para a operação:"));
    const b = parseFloat(prompt("Digite o segundo número para a operação:"));
    const operacao = prompt("Digite a operação (+, -, *, /) para a calculadora:");
  
    if (!isNaN(a) && !isNaN(b)) {
      let resultado;
  
      switch (operacao) {
        case '+':
          resultado = a + b;
          break;
        case '-':
          resultado = a - b;
          break;
        case '*':
          resultado = a * b;
          break;
        case '/':
          resultado = a / b;
          break;
        default:
          resultado = "Operação inválida";
      }
  
      alert(`Resultado da operação: ${resultado}`);
  
      alert("Por favor, digite números válidos.");
    };
  }
  
  
  function receberSalario() {
    return parseFloat(prompt("Digite o salário do colaborador:"));
  }
  
  function calcularReajuste(salario) {
    let percentualAumento;
  
    if (salario <= 280) {
      percentualAumento = 20;
    } else if (salario <= 700) {
      percentualAumento = 15;
    } else if (salario <= 1500) {
      percentualAumento = 10;
    } else {
      percentualAumento = 5;
    }
  
    const aumento = (salario * percentualAumento) / 100;
    const novoSalario = salario + aumento;
  
    return {
      salarioAntesReajuste: salario,
      percentualAumento: percentualAumento,
      valorAumento: aumento,
      novoSalario: novoSalario
    };
  }
  
  function exibirResultados(resultados) {
    alert(`Salário antes do reajuste: R$${resultados.salarioAntesReajuste.toFixed(2)}\n` +
          `Percentual de aumento aplicado: ${resultados.percentualAumento}%\n` +
          `Valor do aumento: R$${resultados.valorAumento.toFixed(2)}\n` +
          `Novo salário após o aumento: R$${resultados.novoSalario.toFixed(2)}`);
  }

  const salarioColaborador = receberSalario();
  const resultadosReajusteColaborador = calcularReajuste(salarioColaborador);
  exibirResultados(resultadosReajusteColaborador);
  
  
function verificarTriangulo(lado1, lado2, lado3) {
  
  if (lado1 + lado2 > lado3 && lado1 + lado3 > lado2 && lado2 + lado3 > lado1) {
      // Verifica o tipo de triângulo
      if (lado1 === lado2 && lado2 === lado3) {
          return "Triângulo Equilátero (todos os lados são iguais)";
      } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
          return "Triângulo Isósceles (dois lados são iguais)";
      } else {
          return "Triângulo Escaleno (todos os lados são diferentes)";
      }
  } else {
      return "Os lados fornecidos não formam um triângulo.";
  }
}

var lado1 = parseFloat(prompt("Digite o comprimento do lado 1:"));
var lado2 = parseFloat(prompt("Digite o comprimento do lado 2:"));
var lado3 = parseFloat(prompt("Digite o comprimento do lado 3:"));


var resultado = verificarTriangulo(lado1, lado2, lado3);
alert(resultado);
