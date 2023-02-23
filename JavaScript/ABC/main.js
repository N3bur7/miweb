// Programa para ordenar el abecedario de la Z a la A e ir eliminando conforme se va iterando en el bucle.

var xyz = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ"); // Abecedario lista
var xyzSepara = xyz.split(''); // Se separa cada letra por elemento del arreglo
var xyzRevSep = xyz.split('').reverse(); // Se invierte el sentido de orden
console.log(xyzRevSep.join('')); // Se imprime el abecedario a la inversa solo una vez
var strReverse;

for(var paso=26; paso>=0; paso--){ // Va ir eliminando conforme se va iterando en el bucle.
    xyzRevSep.shift();
    strReverse = xyzRevSep.join('');
    console.log(strReverse);
}
