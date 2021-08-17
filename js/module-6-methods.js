// array.method(callback)
//       elem, index, array
// callback = ()=>{}

// array.method((elem, index, array)=>{})

// array.forEach() => undefined
const numbers = [1, 2, 3, 4, 5]
console.log('исходный массив', numbers)

const newArr = []
const forEachResult = numbers.forEach((num) => {
  newArr.push(num + 1)
  //   return num // все-равно ничего не возвращает
})
// console.log(forEachResult)
// console.log(newArr)

// array.map() => всегда массив той же длины, что и исходный
const mapResult = numbers.map((item) => {
  //   console.log(item)
  return item + 1
})
// console.log(mapResult)
// console.log('исходный массив', numbers)
// console.log(mapResult === numbers)

// array.filter() => всегда массив, но только тех элементов, что прошли проверку условия
const filterResult = numbers.filter((elem) => {
  //   console.log(elem)
  const condition = elem > 2 && elem < 5
  return condition
})
// console.log('filterResult', filterResult)

// array.find() => только 1 элемент массива, т.е. слвпадение с условием
const findResult = numbers.find((i) => {
  //   console.log(i)
  return i > 2 && i < 5
})
// console.log('findResult', findResult)

// array.reduce() => все что угодно ({}, [], 0, "")
const reduceResultArray = numbers.reduce((acc, elem) => {
  //   console.log(acc, elem)
  //итерация-1 [], 1
  //итерация-2 undefined, 2
  acc.push(elem + '')
  return acc
}, [])
// console.log('reduceResultArray', reduceResultArray)
// console.log(reduceResultArray === numbers)

const reduceResultObject = numbers.reduce((newObject, number) => {
  //   console.log(newObject, number)
  newObject[number] = number
  return newObject
}, {})
// console.log('reduceResultObject', reduceResultObject)

const reduceResultNumber = numbers.reduce((total, num) => {
  //   console.log(total, num)
  total += num
  return total
}, 0)
// console.log('reduceResultNumber', reduceResultNumber)

// array.every() => true || false  (&&)
const everyResult = numbers.every((elem) => {
  //   console.log(elem)
  return elem > 3
})
// console.log('everyResult', everyResult)

// array.some() => true || false   (||)
const someResult = numbers.some((elem) => {
  //   console.log(elem)
  return elem > 5
})
// console.log('someResult', someResult)

// array.sort() - мутирует исходный массив
const fruit = ['banana', 'apples', 'oranges', 'ananas']

const sortFruits = fruit.sort().reverse()
// console.log(sortFruits)
// console.log(fruit)
// console.log(fruit === sortFruits)

const ages = [54, 32, 17, 85, 100, -22, -3, 8, 3]
const sortAges = ages.sort((min, max) => {
  //   return min - max
  return max - min
})
// console.log(sortAges)

// Цепочки методов
const students = [
  { name: 'Phillip', age: 21, gender: 'male' },
  { name: 'Margo', age: 27, gender: 'female' },
  { name: 'Ann', age: 32, gender: 'female' },
  { name: 'Edd', age: 41, gender: 'male' },
  { name: 'Bill', age: 35, gender: 'male' },
]
const result1 = students
  .filter((student) => student.gender === 'female')
  .map((girl) => girl.name)
  .sort()
console.log('result', result1)

const result2 = students.sort((a, b) => a.age - b.age)[0]
console.log(result2)

const result3 = students.sort((a, b) => b.age - a.age)[0]
console.log(result3)

const result4 = students.reduce((acc, elem, i, arr) => {
  console.log((acc += elem.age / arr.length))
  return acc
}, 0)
