// SPREAD - распыление

// распыление элементов массива - Math.min(...arr)
const numbers = [1, 2, 3, 4, 5, 6, 7, 84]

console.log(Math.max(3, 6, 3, 2, 6, 9, 1, 2, 34))
console.log(Math.max(...numbers))
console.log(Math.min(...numbers))

function getResult(a, b) {
  let total = 0
  console.log(arguments) //pseudoarray
  // создание нового массива через паспыление исходного
  const nums = [...arguments] // normal array

  for (let num of nums) {
    total += num
  }
  console.log(nums)
  return total
}
// console.log(getResult(2, 5, 4, 5, 6))

const first = [1, 2, 3]
const cloneFirst = first.slice(1, 2)
// console.log('cloneFirst:', cloneFirst)
// console.log(first === cloneFirst)

const newArr = first.concat(cloneFirst)
// console.log(newArr)

// + slice() || добавить любое кол-во элементов
const spreadArr = [...first, 444, ...first.slice(1, 2)]
// console.log(spreadArr)

// распыление объектов {...obj1, ...obj2}, можно добавляя отдельные св-ва
const product = {
  title: 'Cake',
  name: 'Napoleon',
}

console.log(product)

const params = {
  category: 'sweets',
}
const { category } = params

const newProduct = { ...product, price: 30, category }
// console.log(newProduct)

// console.log(product === newProduct)

// REST - сбор
// аргументы в функциях в полноценный массив
const getTotalResult = (...args) => {
  // console.log(args)
  let total = 0
  for (let num of args) {
    total += num
  }
  return total
}
let result = getTotalResult(23, 45, 23, 45, 56, 15, 32, 43, 65)
// console.log('result', result)

result = getTotalResult(22, 35, 1, 25, 31, 24, 44, 6, 78)
// console.log('result', result)

// (email, arg1, ...for, argN)
// { studentMail: "", score: 0 }

const scoresOfStudents = []
function getResultsOfTests(mail, ...scores) {
  // console.log(mail)
  // console.log(scores)
  let totalScore = 0
  for (let score of scores) {
    totalScore += score
  }
  // console.log('totalScore:', totalScore)
  const obj = {
    email: mail,
    score: totalScore,
  }
  // console.log(obj)
  scoresOfStudents.push(obj)
  console.log(scoresOfStudents)
}

getResultsOfTests('a@gmail.com', 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1)
getResultsOfTests('b@gmail.com', 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1)
getResultsOfTests('c@gmail.com', 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1)
getResultsOfTests('d@gmail.com', 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1)
getResultsOfTests('e@gmail.com', 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1)

