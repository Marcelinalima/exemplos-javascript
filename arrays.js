const  arrayA  =  [ 1,2 ] ; 

const  [ a , b ,  c  =  "3" ]  =  arrayA ;
const  novoArray  =  [ ... arrayA ,  3 ,  4 ,  5 ] ;
const  [ d , ... resto ]  =  arrayA ;

//----------------------------
const numero =  [ 1 , 2 , 3 , 5 , 6 , 10 , 13 ] ;

numeros . empurre ( 5 ) ;
numeros . unshift ( 3 ) ;
numeros . pop ( ) ;
numeros . deslocar ( ) ;
numeros . emenda ( 4 ,  1 ) ;

const  numerosCalculados  =  numeros . mapa (  valor   =>  
   valor  *  2)
 ;

const  numerosPares  =  numeros . filtro ( valor  =>  valor  %  2  ===  0 ) ;

numeros . forEach ( valor  =>  {
  console . registro ( valor )
} )