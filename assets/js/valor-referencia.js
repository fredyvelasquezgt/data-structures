let a = 30;
let b = a;

console.log({a,b})




const cambiaNombre = (persona) => {
    persona.nombre = 'Tony';
    return persona;
}

let peter = {nombre: 'Peter'}
let tony = cambiaNombre(peter)
console.log({peter, tony})