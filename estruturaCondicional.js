// exemplo 1
let idade = 18;
let temTituloEleitor = false;

if(idade >= 18 && temTituloEleitor === true){
    // executa esse trecho de código
    console.log("O usuário deve votar");

} else {
    //executa esse trecho de código
    console.log("O usuário não é obrigado a votar");
  }
  // ---------------------------------------------------
  
  //exemplo 2
let nota = 5.5;
/*
  - se a nota for maior ou igual a 7 = aprovado;
  - se a nota for maior igual a 3 e menor igual a 6 = recuperação;
  - se a nota for menor que 3 = reprovado
*/
if(nota >= 7){
    console.log("aluno aprovado")
} else if (nota >= 3 && nota <=6) {
    console.log("aluno  em recuperação")
}else if(nota > 3 ){
    console.log("aluno aprovado")
}
// --------------------------------------------
// exemplo 3
let portaAberta = true;
let janelaAberta = false;

if (portaAberta || janelaAberta) {
  console.log("acionar o alarme");
} else {
  console.log("não acionar o alarme");
}

// --------------------------------
let experienciaProfissional = {
  cargo: "Auxiliar administrativo",
  nome_empresa: "Baires Foods",
  data_inicio: "09/2012",
  data_fim: "01/2015",
  descricao: "Atividades na area administrativa",
  atividades: ["atividade 1", "atividade 2"],
};

// exemplo 1
if (
  experienciaProfissional.data_fim === null ||
  experienciaProfissional.data_fim === ""
) {
  console.log("o usuário ainda trabalha nessa empresa");
} else {
  console.log("o usuário não trabalha nessa empresa");
}

// exemplo 2 = valida se a propriedade data_fim não existe
if (!experienciaProfissional.data_fim) {
  console.log("o usuário ainda trabalha nessa empresa");
} else {
  console.log("o usuário não trabalha nessa empresa");
}

//exemplo 3
let numero1 = 5;
let numero2 = 10;
let resultado = 0;
let operacao = 'soma';

if(operacao === "soma"){
  resultado = numero1 + numero2;
}else if(operacao === "subtrair"){
  resultado = numero1 - numero2;
}

// ---------------------------------------------------------
// SWITCH CASE
    let signo = "Touro";

    switch (signo){ // o switch recebe somente um valor que sera testado abaixo
      case "Áries" : 
      case "áries" :
      case "aries" : //valor o valor (signo) for igual aos textos ele irá executar o trecho de código
        console.log("de 21 de março a 20 de abril");
        break;
      case "Touro":
      case "touro":
        console.log("de 21 de abril a 20 de maio");
        break;
      default : // default é opcional, só será executado quando a variavel signo for diferente das opções acima
        console.log("signo não registrado");
        break;
    }

// ---------------------------------------------------------

let _operação = prompt("Digite o sinal da operação desejada (+ , -, * (multiplicar), / (dividir)): ");
let _numero1 = prompt("Digite o primeiro numero: ");
let _numero2 = prompt("Digite o segundo numero: ");

let _resultado = "";

_numero1 = parseFloat(_numero1);
_numero2 = parseFloat(_numero2);

switch (_operação){
  case '+':
    _resultado = _numero1 + _numero2; 
    break;
  case '-':
    _resultado = _numero1 - _numero2;
    break;
  default :
    _resultado = "operacao invalida";
    break;
}

alert(_resultado);
