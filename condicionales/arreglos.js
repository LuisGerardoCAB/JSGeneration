let numero = [23,232,23,23, 36]
numero.push(12);

/*
PUSH PONER HASTA EL ULTIMO LUGAR DEL ARREGLO
POP PARA QUITAR EL ULTIMO ELEMENTO
UNSHIFT- AGREGA EL FINAL DEL ARREGLO 
SHIFT  ..QUITA UN ELEMENTO AL INICIO
*/ 
numero.forEach(function(el){
    console.log(el);


})

numero.forEach(function(valor, indice, numero){

    console.log("el valor: "+ valor+ " esta en el indice: "+ indice);
})

/*
for i es para objetos
for(let y in numero){
    console.log(y);
}
*/

