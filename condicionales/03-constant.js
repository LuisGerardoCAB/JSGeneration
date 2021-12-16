const pi = 3.1416;
console.log(pi);
var numero=0;
while(numero!=5){

numero = parseInt(prompt("Que quieres hacer \n 1: Sumar \n 2: Restar"));

switch (numero){
case 1: 
const numero1 = parseInt(prompt("ingresa el primer numero"));
const numero2= parseInt(prompt("ingresa el segundo numero"));

const suma=numero1+numero2;
alert(suma);
break;
case 2: 
const numero3 = parseInt(prompt("ingresa el primer numero"));
const numero4= parseInt(prompt("ingresa el segundo numero"));

const resta=numero3-numero4;
alert(resta);
break;
default: 
alert("No ees numero lo que ingresaste");
}


}


