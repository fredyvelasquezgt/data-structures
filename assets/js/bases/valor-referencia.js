let a = 30;
let b = a;

console.log({a,b})


let juan = {nombre: 'Juan'};
let ana = {...juan};
ana.nombre = 'Ana';

console.log({juan, ana})

const cambiaNombre = (persona) => {
    persona.nombre = 'Tony';
    return persona;
}

let peter = {nombre: 'Peter'}
let tony = cambiaNombre(peter)
console.log({peter, tony})

//Arreglos
const frutas = ['Manzana', 'Pera', 'Pina']

console.time('slice')
const otrasFrutas = [...frutas];
console.timeEnd('slice')

otrasFrutas.push('Mango')
console.table({frutas, otrasFrutas})