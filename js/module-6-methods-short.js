const numbers = [1, 2, 3, 4, 5]
console.log('исходный массив', numbers)

// FOREACH
const newArr = []
const forEachResult = numbers.forEach((num) => newArr.push(num + 1))
console.log('FOREACH', newArr)

// MAP
const mapResult = numbers.map((item) => item + 1)
console.log('MAP', mapResult)

// FILTER
const filterResult = numbers.filter((elem) => elem > 2 && elem < 5)
console.log('filterResult', filterResult)

// FIND
const findResult = numbers.find((i) => i > 2 && i < 5)
console.log('findResult', findResult)

// REDUCE
const reduceResultNumber = numbers.reduce((total, num) => (total += num), 0)
console.log('reduceResultNumber', reduceResultNumber)

// EVERY
const everyResult = numbers.every((elem) => elem > 3)
console.log('everyResult', everyResult)

// SOME
const someResult = numbers.some((elem) => elem > 5)
console.log('someResult', someResult)

// SORT
const ages = [54, 32, 17, 85, 100, -22, -3, 8, 3]
const sortAges = ages.sort((min, max) => max - min)
console.log(sortAges)
