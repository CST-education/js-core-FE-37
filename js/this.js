// const arr = [
//   { name: 'Albert', surname: 'Einstein', born: 1879, dead: 1955, id: 1 },
//   { name: 'Isaac', surname: 'Newton', born: 1643, dead: 1727, id: 2 },
//   { name: 'Galileo', surname: 'Galilei', born: 1564, dead: 1642, id: 3 },
//   { name: 'Marie', surname: 'Curie', born: 1867, dead: 1934, id: 4 },
//   { name: 'Johannes', surname: 'Kepler', born: 1571, dead: 1630, id: 5 },
//   { name: 'Nicolaus', surname: 'Copernicus', born: 1473, dead: 1543, id: 6 },
//   { name: 'Max', surname: 'Planck', born: 1858, dead: 1947, id: 7 },
//   { name: 'Katherine', surname: 'Blodgett', born: 1898, dead: 1979, id: 8 },
//   { name: 'Ada', surname: 'Lovelace', born: 1815, dead: 1852, id: 9 },
//   { name: 'Sarah E.', surname: 'Goode', born: 1855, dead: 1905, id: 10 },
//   { name: 'Lise', surname: 'Meitner', born: 1878, dead: 1968, id: 11 },
//   { name: 'Hanna', surname: 'Hammarström', born: 1829, dead: 1909, id: 12 },
// ]
// function getWriterByAge(arr) {
//   const ages = arr.map((obj) => obj.dead - obj.born)
//   const maxAge = Math.max(...ages)
//   const minAge = Math.min(...ages)

//   const obj = arr.find((obj) => obj.dead - obj.born === maxAge)
//   let name1 = `${obj.name} ${obj.surname}`

//   const obj2 = arr.find((obj) => obj.dead - obj.born === minAge)
//   let name2 = `${obj2.name} ${obj2.surname}`

//   return `Максимальный возраст у ${name1}: ${maxAge} лет, 
//     а минимальный у ${name2}: ${minAge}`
// }
// console.log(getWriterByAge(arr))
// 'use strict'
console.log('GLOBAL', this) // WINDOW независимо от 'use strict'
// ;(() => {
//   console.log('глобальный вызов arrow IIEF', this)
// })() // WINDOW
// ;(function getThis() {
//   console.log('глобальный вызов declaration IIEF', this)
// })() // WINDOW без 'use strict' & undefined с 'use strict' || type="module"

// const obj1 = {
//   innerObj: {
//     arrow: () => {
//       console.log('arrow method:', this) // WINDOW = контекст области, в которой
//     },

//     usual() {
//       console.log('usual method', this) // свой контекст = объект, на котором вызван
//     },
//   },
// }
// obj1.innerObj.arrow() // WINDOW
// obj1.innerObj.usual() // на innerObj

// const obj2 = {
//   name: 'user',
// }
// function mainFunc(arrow, usual) {
//   arrow() // WINDOW
//   usual() // на тот, к кому прибаиндили - obj2
// }
// mainFunc(obj1.innerObj.arrow.bind(obj2), obj1.innerObj.usual.bind(obj2))

// type="module"
// console.log('GLOBAL', this) // undefined
// ;(() => {
//   console.log('глобальный вызов IIEF', this)
// })() // undefined
// ;(function getThis() {
//   console.log('глобальный вызов declaration IIEF', this)
// })() // undefined
// const obj1 = {
//   innerObj: {
//     arrow: () => {
//       console.log('arrow method:', this) // undefined = контекст области, в которой
//     },

//     usual() {
//       console.log('usual method', this) // свой контекст = объект, на котором вызван
//     },
//   },
// }
// obj1.innerObj.arrow() // undefined
// obj1.innerObj.usual() // на innerObj

// const obj2 = {
//   name: 'user',
// }
// function mainFunc(arrow, usual) {
//   arrow() // WINDOW
//   usual() // на тот, к кому прибаиндили - obj2
// }
// mainFunc(obj1.innerObj.arrow.bind(obj2), obj1.innerObj.usual.bind(obj2))
