console.log(`module-6`)
// let name = 'Oleh'
// let age = 18

// const user = {
//   name: 'Igor',
//   age,
// }
// const array = [user]

// let result = array.map((name) => {
// //   console.log(name.name)
//   const {name: userUser} = name
// //   console.log(userUser)
// //   return { name }
// })
// // console.log(result)

// ========================
// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
// ]
// console.log(books)
// const BOOK_TITLE = 'Сон смешного человека'
// const AUTHOR = 'Роберт Шекли'
// // // Пиши код ниже этой строки

// const bookWithTitle = books.find(({ title }) => title === BOOK_TITLE)
// console.log(bookWithTitle)
// const bookByAuthor = books.find(({ author }) => author === AUTHOR)
// console.log(bookByAuthor)
// а не так, как принял бот:
// const books = [
//   { title: "Последнее королевство", author: "Бернард Корнуэлл", rating: 8.38 },
//   { title: "На берегу спокойных вод", author: "Роберт Шекли", rating: 8.51 },
//   { title: "Сон смешного человека", author: "Федор Достоевский", rating: 7.75 },
//   { title: "Красна как кровь", author: "Ли Танит", rating: 7.94 },
// ];
// const BOOK_TITLE = "Сон смешного человека";
// const AUTHOR = "Роберт Шекли";
// // Пиши код ниже этой строки

// const bookWithTitle = books.find((title) => title.title === BOOK_TITLE);
// const bookByAuthor = books.find((author) => author.author === AUTHOR);

// =================================

const arr = [
  { name: 'Albert', surname: 'Einstein', born: 1879, dead: 1955, id: 1 },
  { name: 'Isaac', surname: 'Newton', born: 1643, dead: 1727, id: 2 },
  { name: 'Galileo', surname: 'Galilei', born: 1564, dead: 1642, id: 3 },
  { name: 'Pierre', surname: 'Curie', born: 1859, dead: 1934, id: 4 },
  { name: 'Marie', surname: 'Curie', born: 1867, dead: 1934, id: 4 },
  { name: 'Johannes', surname: 'Kepler', born: 1571, dead: 1630, id: 5 },
  { name: 'Nicolaus', surname: 'Copernicus', born: 1473, dead: 1543, id: 6 },
  { name: 'Max', surname: 'Planck', born: 1858, dead: 1947, id: 7 },
  { name: 'Katherine', surname: 'Blodgett', born: 1898, dead: 1979, id: 8 },
  { name: 'Ada', surname: 'Lovelace', born: 1815, dead: 1852, id: 9 },
  { name: 'Sarah E.', surname: 'Goode', born: 1855, dead: 1905, id: 10 },
  { name: 'Lise', surname: 'Meitner', born: 1878, dead: 1968, id: 11 },
  { name: 'Hanna', surname: 'Hammarström', born: 1829, dead: 1909, id: 12 },
]
// console.log(arr)
// 1
// const condition = obj.born >= 1800 && obj.born < 1900
let result = arr.filter((obj) => obj.born >= 1800 && obj.born < 1900)
// console.log(result)

// 2
// result = arr.reduce((acc, obj) => {
//   let age = obj.dead - obj.born
//   return acc + age
// }, 0)
result = arr.reduce((acc, obj) => (acc += obj.dead - obj.born), 0)
// console.log('result', result)

// 3
result = arr.sort((a, b) =>
  (a.surname + ' ' + a.name).localeCompare(b.surname + ' ' + b.name),
)
// console.log('result', result)

// 4
result = arr.sort((a, b) => a.dead - a.born - (b.dead - b.born))
// console.log('result', result)
// result.forEach((el) => console.log(el.dead - el.born)) // проверка

// 5
result = arr.filter((obj) => !(obj.born >= 1400 && obj.born < 1700))
// console.log('result', result)

// 6
// result = arr.sort((a, b) => a.born - b.born)[arr.length - 1]
// console.log('result', result)

// 7
// result = arr.find((obj) => obj.name + ' ' + obj.surname === 'Albert Einstein')
//   .born
// console.log('result', result)

result = arr.reduce((acc, obj) => {
  if (obj.name + ' ' + obj.surname === 'Albert Einstein') {
    acc = obj.born
  }
  return acc
}, 0)
// console.log('result', result)

// 8
result = arr.filter((obj) => obj.surname[0] === 'C')
// console.log('result', result)

// 9
result = arr.filter((obj) => obj.name[0] !== 'A')
// console.log('result', result)

// 10
result = arr.sort((a, b) => {
  return a.dead - a.born - (b.dead - b.born)
})
let youngest = result[0]
let oldest = result.reverse()[0]
// console.log('result', youngest, oldest)
// result.forEach((el) => console.log(el.dead - el.born)) // проверка

// 11
result = arr.filter((obj) => obj.name[0] === obj.surname[0])
// console.log('result', result)

// 12
// console.log(arr)
result = arr.every((obj) => obj.dead >= 1800 && obj.dead < 1900)
console.log('result', result)
