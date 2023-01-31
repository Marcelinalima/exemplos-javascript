const  objetoA  =  {
    a : 1 ,
    b : 2 ,
  } ;
  const  objetoB  =  {
    c : 3 ,
  } ;
  
  const  exemplo1  =  Objeto . assign ( objetoA ,  objetoB ) ;
  const  exemplo2  =  Objeto . chaves ( objetoA ) ;
  const  exemplo3  =  Objeto . valores ( objetoA ) ;
  const  exemplo4  =  JSON . stringify ( objetoA ) ;
  const  exemplo5  =  JSON . analisar ( exemplo4 ) ;
  
  // DESESTRUTURAÇÃO
  const  { a ,  b : f , c =  "3"  }  =  objetoA ;
  
  const  novoObjeto  =  {
    ... objetoA ,
    d : 4 ,
    e : 5 ,
  } ;