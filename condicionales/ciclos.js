for(let y=1; y<=10; y++){
    console.log(y);
}
console.log("Hola");

let numeros= [1,4,7,9,19,15,46,27,40,123];
let resultado=[];
var array;
for(let i=0; i<numeros.length;i++){
    resultado.push(numeros [i]*2);
}
console.log(resultado);


resultado.forEach( function(valor, indice) {
    console.log("En el índice " + indice + " hay este valor: " + valor);
});
