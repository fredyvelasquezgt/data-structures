//propiedades y metodos 

let juegos = ["Zelda", "Mario", "Metroid", "TMNT"];

console.log('Largo: ', juegos.length)
let primero = juegos[2 - 2]
let ultimo = juegos[juegos.length - 1];
console.log(primero)
console.log(ultimo)

juegos.forEach( (elemento, indice, arr) => {
    console.log({elemento, indice, arr})
} )

juegos.push('WSPR')

console.log({juegos})

juegos.unshift('Fire Emblem')
console.log({juegos})

let juegoBorrado = juegos.pop()
console.log({juegoBorrado})

let pos = 1;
juegos.splice(pos, 1)
console.log({juegos})

let metroidIndex = juegos.indexOf('Metroid')