//Creacion de las variables
var palabra = "homework";
var tamaño = palabra.length;

//Uso de la funcion length
console.log("El tamaño de la palabra '" + palabra + "' es: " + tamaño);

//Creacion de las arrays para usar las funciones 

const myArray = [1, 2, 3, 4, 5]
myArray2 = [...myArray]
const Array1 = [6, 7, 8, 9]

//Uso de la funcion concat 
const Array2 = myArray.concat(Array1)

//Uso de la funcion at
console.log(`Elemento devuelto, ${myArray.at(3)}`)
//Uso de la funcion concat 
console.log(`Array devuelta, ${Array2}`)

//Uso la función copyWithin para copiar los elementos del índice 3 al índice 0 
myArray.copyWithin(0, 3);
//Imprimo el array resultante
console.log(myArray);

// Creo un objeto de ejemplo
const Yo = {
    nombre: "Joan",
    edad: 20,
    ciudad: "Santander"
  };

  // Uso la función entries() para obtener un iterador de las entradas del objeto
  const entradas = Object.entries(Yo);
  // Recorremos entradas y la imprimo
  for (const [clave, valor] of entradas) {
    console.log(`${clave}: ${valor}`);
  }

// Creo un arreglo de números pares
const numeros = [2, 4, 6, 8, 10];
// Verifico si todos los números son pares para usar every() que debe dar un booleano de salida
const Pares = numeros.every(numero => numero % 2 === 0);
console.log(Pares); 

// Definimos un arreglo inicial
const array = [1, 2, 3, 4, 5];
// Relleno el arreglo con el valor 0 desde la posición 2 hasta la posición 4 con Fill()
const arregloRellenado = array.fill(0, 2, 5);
console.log(arregloRellenado);

// Filtra los números del arreglo anterior (numeros) mayores que 6
const numerosFiltrados = numeros.filter(numero => numero > 6);
console.log(numerosFiltrados);

// Defino un arreglo de objetos
const Amigos = [
  { nombre: 'Daniel', edad: 22 },
  { nombre: 'Joan', edad: 20 },
  { nombre: 'Valentina', edad: 18 },
];

// Busca la primera persona con edad mayor a 20
const personaEncontrada = Amigos.find(Amigos => Amigos.edad > 20);
console.log(personaEncontrada);
// Busca el índice de la persona con el nombre de Valentina
const indicePersona = Amigos.findIndex(Amigos => Amigos.nombre === 'Valentina');
console.log(indicePersona); 

// Busca el último número par en el arreglo numeros
const ultimoPar = numeros.findLast(numero => numero % 2 === 0);
console.log(ultimoPar);

// Busca el ultimo índice de que sea mayor a 5 
const indice = numeros.findLastIndex(num => num > 5);
console.log(indice);

//Creo un arreglo de ejemplo para usar la funcion flat
const array3 = [1, [2, 3], [4, [5, 6]]];
console.log(array3.flat());

//Creo un arreglo de ejemplo para usar la funcion flatMap
const array4 = [1, 2, 3, 4];
console.log(array4.flatMap(x => [x, x * 2]));

//Creo un arreglo de ejemplo para usar la funcion forEach
const array5 = ['a', 'b', 'c'];
array5.forEach(element => console.log(element));

//Creo un arreglo de ejemplo para usar la funcion includes
const array6 = [1, 2, 3];
console.log(array6.includes(2));

//Creo un arreglo de ejemplo para usar la funcion indexOf
const array7 = [1, 2, 3, 4, 5];
console.log(array7.indexOf(2));

//Creo un arreglo de ejemplo para usar la funcion join

const array8 = [1, 2, 3, 4, 5];
console.log(array8.join());

//Creo un arreglo de ejemplo para usar la funcion keys
const array9 = ['a', 'b', 'c'];
const iterator = array9.keys();

for (const key of iterator) {
  console.log(key);
}

//Creo un arreglo de ejemplo para usar la funcion lastIndexOf
const array10 = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
console.log(array10.lastIndexOf(2));

//Creo un arreglo de ejemplo para usar la funcion map
const array11 = [1, 4, 9, 16];
const map1 = array11.map(x => x * 2);

console.log(map1);

//Creo un arreglo de ejemplo para usar la funcion pop
const array12 = [1, 2, 3];
console.log(array12.pop());

//Creo un arreglo de ejemplo para usar la funcion push
const array13 = [1, 2, 3];
console.log(array13.push(4));

//Creo un arreglo de ejemplo para usar la funcion reduce
const array14 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

console.log(array14.reduce(reducer));

//Creo un arreglo de ejemplo para usar la funcion reduceRight
const array15 = [[0, 1], [2, 3], [4, 5]].reduceRight(
  (accumulator, currentValue) => accumulator.concat(currentValue)
);

console.log(array15);

//Creo un arreglo de ejemplo para usar la funcion reverse
const array16 = ['one', 'two', 'three'];
console.log('array16:', array16);
const reversed = array16.reverse();
console.log('reversed:', reversed);

//Creo un arreglo de ejemplo para usar la funcion shift
const array17 = [1, 2, 3];
console.log(array17.shift());

//Creo un arreglo de ejemplo para usar la funcion slice
const array18 = [1, 2, 3, 4, 5];
console.log(array18.slice(2));

//Creo un arreglo de ejemplo para usar la funcion some
const array19 = [1, 2, 3, 4, 5];
const even = element => element % 2 === 0;
console.log(array19.some(even));

//Creo un arreglo de ejemplo para usar la funcion sort
const array20 = [1, 30, 4, 21, 100000]; 
console.log(array20.sort());

//Creo un arreglo de ejemplo para usar la funcion splice
const array21 = [1, 2, 3, 4, 5];
console.log(array21.splice(2));

//Creo un arreglo de ejemplo para usar la funcion toLocaleString
const array22 = [1, 'a', new Date('17 Jul 2003 16:12:00 UTC')];
const localeString = array22.toLocaleString('en', { timeZone: 'UTC' });

console.log(localeString);

//Creo un arreglo de ejemplo para usar la funcion toString
const array23 = [1, 2, 'a', '1a'];
console.log(array23.toString());

//Creo un arreglo de ejemplo para usar la funcion unshift
const array24 = [1, 2, 3];
console.log(array24.unshift(4, 5));

//Creo un arreglo de ejemplo para usar la funcion values
const array25 = ['a', 'b', 'c'];
const iterator2 = array25.values();

for (const value of iterator2) {  
  console.log(value);
}

