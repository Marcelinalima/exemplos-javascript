/*comentário de uma linha |

/*
 comentario para mais de 1 linha
 */

//---------------------------------------
/*
 declarando variável com var, let e const
 */
var nome_completo="joão da silva";//variável pode ser alterada
let idade = 20; // variável pode ser alterada
const cpf = "123456798"; // variável nao pode ser alterada

//console.log serve para "printar/mostrar" o valor no console do navegador
console. log(nome_completo, idade,cpf)

//alterar o valor das variáveis

nome_completo = "Alice";
idade = 20;

console.log(nome_completo, idade, cpf)
console.log(nome_completo, idade, cpf);

//-------------------------------------------------------------------------------

// Formas de declarar variáveis do tipo string
var nome = "josé";
var nome2 = 'maria';
var nome3 = `joão`;

// Formas de declarar váriaveis do tipo number
let numero = 20; //inteiro
let numeroDecimal = 15.5; //decimal

// Declaração de variável tipo boolean (true / false)
let bolean = false;

// Declaração de arrays (listas)
let frutas = ["maçã", "uva", "Melancia"];
let numerosDaMegaSena = [12,15,30,20];
let lista = ["teste", 12, true, 15.5];

// Declaração de um objeto 
let casa = {
  "endereco": "Florianópolis - Brasil",
  'quantidade_banheiros': 3,
  cor: "Amarela",
  alugado: false
};

let experienciaProfissional = {
  cargo: "Desenvolvedor FullStack",
  nome_empresa: "Serasa",
  data_inicio: "12/2022",
  data_fim: null,
  descricao: "Lorem ipsum dolor sit amet consectetur, adipisicing",
  atividades: ["atividade 1", "atividade 2"]
};

//Declaração de um array de objetos
let experiencias = [
  {
    cargo: "Desenvolvedor Web",
    nome_empresa: "Floripa",
    data_inicio: "12/2022",
    data_fim: null,
    descricao: "Lorem ipsum dolor sit amet consectetur, adipisicing",
    atividades: ["atividade 1", "atividade 2"],
  },
  {
    cargo: "Auxiliar ADM",
    nome_empresa: "loja Maia",
    data_inicio: "05/2015",
    data_fim: "11/2021",
    descricao: "Lorem ipsum dolor sit amet consectetur, adipisicing",
    atividades: ["atividade 1", "atividade 2"]
  }
];

//typeof função do javascript para saber o tipo da variável;
console.log(typeof experiencias)

// principal diferença entre var e let
if(true){
  let variavelet="variavel let";
  var variavelVar=" variavel var";
  
  console.log(variavelvalet)//printa o valor
  console.log(variavelVar) //printa o valor
}

  console.log(variavelVar)//printa o valor
  //console.log(variavelVar)  // o codigo da erro 
