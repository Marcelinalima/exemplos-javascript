// possibilidade 1 para declarar função
function fazAlgumaCoisa(numero, x, y, z, w) {
    console.log("Olá mundo " + numero);
    console.log(x, y, z, w);
  }
  
  fazAlgumaCoisa(10, "valor de x", {}, [], false);
  
  // possibilitade 2 para declarar função
  const _somar = function (num1, num2) {
    console.log("Executou a função somar");
    const resultado = num1 + num2;
    console.log("resultado do calculo da função somar() = " + resultado);
  };
  
  somar(10, 5);
  
  // possibilidade 3 para declarar função
  const _subtrair = (num1, num2) => {
    const resultado = num1 - num2;
    console.log(resultado);
  };
  
  subtrair(5, 2);
  
  // ------------------------------------------------------
  
  // declarar função com somente 1 valor e executando 1 linha de código;
  const dizerOla = (valor) => console.log("Olá mundo " + valor);
  
  dizerOla("programação");
  
  // -------------------------------------
  
  // ENTRADA DE DADOS
  let numero1 = parseInt(prompt("Digite o primeiro número: "));
  let numero2 = parseInt(prompt("Digite o segundo número: "));
  
  // PROCESSAMENTO DE DADOS
  const multiplicar = (num1, num2) => {
    if (Number.isNaN(num1) === false && Number.isNaN(num2) === false) {
      return num1 * num2;
    }
    return "numeros incorretos";
  };
  const somar = (num1, num2) => num1 + num2;
  const subtrair = (num1, num2) => num1 - num2;
  const dividir = (num1, num2) => num1 / num2;
  
  let resultadoMultiplicacao = multiplicar(numero1, numero2);
  let resultadoSoma = somar(numero1, numero2);
  let resultadoSubtracao = subtrair(numero1, numero2);
  let resultadoDivisao = dividir(numero1, numero2);
  
  // SAÍDA
  alert(`
      ${numero1} + ${numero2} = ${resultadoSoma}
      ${numero1} - ${numero2} = ${resultadoSubtracao}
      ${numero1} * ${numero2} = ${resultadoMultiplicacao}
      ${numero1} / ${numero2} = ${resultadoDivisao}
  `);
  
  // CALCULO DE IMC
  
  function calcularIMC(altura, peso) {
    var imc = peso / (altura * altura);
  
    if (imc < 18.5) {
      return "Abaixo do peso do normal";
    }
  
    if (imc >= 18.5 && imc <= 24.9) {
      return "Peso Normal";
    }
  
    if (imc >= 25 && imc <= 29.9) {
      return "Excesso de peso";
    }
  
    if (imc >= 30 && imc <= 34.9) {
      return "Obessidade classe 1";
    }
  
    if (imc >= 35 && imc <= 39.9) {
      return "Obessidade classe 2";
    }
    return "Obessidade classe 3";
  }
  
  const altura = parseFloat(prompt("Digite seu altura"));
  const peso = parseFloat(prompt("Digite seu peso"));
  
  var resultado = calcularIMC(altura, peso);
  
  alert(`Sua situação IMC = ${resultado}`);