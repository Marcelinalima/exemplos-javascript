// for serve para repetir um trecho de código n vezes
/**
 * for (variavel; condicao; incrementador/decrementador){
 *  //Trecho de código que será repetido
 * }
 */
for(let contador = 0; contador <= 10; contador++){
    console.log("contador " + contador)
  }
  
  let contador_ = 1;
  for(; contador_ <= 10; contador_++){
    console.log("contador " + contador_)
  }
  
  //------------ WHILE -------------------
  let numero = 42;
  let divisor = 1;
  
  while(divisor <= numero){
      let restoDivisao = numero % divisor;
  
    if(restoDivisao === 0){
      console.log("o número " + divisor + " é divisivel por " + numero)
  }
  
  divisor++;
  }
  
  //------------ DO WHILE -------------------
  
  let _contador = 0;
  
  do {
      console.log("contador " + _contador);
    _contador++;
  } while(_contador < 10);
  
  
  //------------ Exemplos com array/texto -------------------
  
  let texto = "programação"; //no javascript, uma string também pode ser considerado como array
  
  
  let contador1 = 1;
  //for of percorre o array ou texto
  for (let valor of texto) { // variavel "valor" recebera cada posição da string
    console.log(`execucao: ${contador1}, valor: ${valor}`);
    contador1++;
  }
  
  // mesmo exemplo de cima, feito de uma forma diferente
  for(let i = 0; i < texto.length; i++){ //texto.length retorna o tamanha da variavel texto
    console.log(`execucao: ${i}, valor: ${texto[i]}`);
  }
  
  // --------------------------------------
  // EXEMPLO 1, COM IF TERNÁRIO E TEMPLATE STRING
  let idade = 18;
  let resultado = `o usuário é ${idade >= 18 ? "maior de idade" : "menor de idade"}`;
  console.log(resultado)
  
  // MESMO EXEMPLO SEM IF TERNÁRIO E SEM TEMPLATE STRING
  let resultado2 = "o usuário é ";
  if(idade >= 18){
    resultado2 += "maior de idade"
  }else{
    resultado2 += "menor de idade"
  }
  
  console.log(resultado2)
  
  
  // ---------------------------------------------
  // EXEMPLOS 2
  let numeros = [20,15,60,50]
  let resultado3 = 0;
  for(let posicao = 0; posicao < numeros.length; posicao++){
    resultado3 += numeros[posicao]; 
  }
  console.log(resultado3);
  
  // EXEMPLOS 2 COM WHILE
  let index = 0;
  let _resultado = 0;
  while(index < numeros.length){
    _resultado += numeros[index];
    index++;
  }
  
  console.log(_resultado)