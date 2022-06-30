
 let cadena = prompt("Escribe la frase a procesar","");

 let caracter = prompt("Escribe el caracter que quieres contar:","");

 let caracteres = cadena.split("");
console.log(caracteres)
let contador = 0;

let total=caracteres.map((letra) => {
    if (letra == caracter){
        contador=contador + 1 ;
    }   
})



 document.write('La Frase "'  + cadena + '" contiene ' + contador + " veces el caracter: " + caracter);