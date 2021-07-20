// ARRAYS Array() String() Number() Boolean()

// create (post) new array
const array = [1, 2, 3, 'JavaScript', 4, 5, 6]
// console.log(array)

// array length - количество элементов в массиве
// console.log(array.length)

// // read (get) element by arrays
// console.log(array[0])
// console.log(array[3])

// update (patch) element in array
array[0] = 'I Love'
// console.log(array[0])
// console.log(array)

// delete element in array
delete array[1]
delete array[2]

// console.log(array[1])
// console.log(array[2])

// console.log(array)

// add elem by index
array[1] = 'HTML'
array[2] = 'CSS'
// console.log(array)

// iterate by array (for & for...of)
// break & continue
//                               i = i + 1
//                               i++
for (let i = 0; i < array.length; i += 1) {
  if (typeof array[i] === 'string') {
    continue
  }
  //   console.log(`итерация - ${i + 1}`, array[i])
  //   console.log('index: ', i)
  //   итерация 1 - array[0] - I Love
  //   итерация 2 - array[1] - 2
  //   итерация 3 - array[2] - 3
  //   итерация 4 - array[3] - JavaScript
  //   итерация 5 - array[4] - 4
  //   итерация 6 - array[5] - 5
  //   итерация 7 - array[6] - 6
}

for (let i = 0; i < array.length; i += 1) {
  //   console.log(`BREAK`)
  if (typeof array[i] === 'string') {
    break
  }
  //   console.log(`итерация - ${i + 1}`, array[i])
}

// multidimensional arrays

const multiArray = [
  [1, 10, 100, 1000],
  [2, 20, 200, 2000],
  [3, 30, 300, 3000],
]
// console.log(multiArray.length) // 3

// console.log(multiArray[0]) // [1, 1]
let it = 1
for (let zzz of multiArray) {
  //   console.log(`iteration - ${it}`, zzz)
  it += 1
  for (let xxx of zzz) {
    // console.log(xxx)
    // if (xxx === 1) {
    //   console.log('xxx:', xxx)
    // }
  }
}

// Примитивы присваиваются новой перемнной позначению - т.е. ксерокопия
// Слодные типы передают только ссылку,
// т.е. еще одна переменная имеет доступ к тем же данным
let age = 30
// console.log('age', age)

let myAge = age
// console.log('myAge', myAge)
// console.log(age === myAge) // true

age = 31
// console.log('age', age)
// console.log('myAge', myAge)

// console.log(age === myAge) // false
// =====================
const numbers = [12, 23, 34, 45]
// console.log('numbers', numbers)

const myNumbers = numbers
// console.log('myNumbers', myNumbers)

// а теперь изменю значение первого элемента в исходном массиве
numbers[0] = 100500
// console.log('numbers', numbers)
// console.log('myNumbers', myNumbers)

// Array Methods
// console.log('numbers', numbers)

// slice()
const mySliceNumbers = numbers.slice()
// console.log('mySliceNumbers', mySliceNumbers)

// console.log(numbers === mySliceNumbers) // false

numbers[0] = 12
// console.log('numbers', numbers)
// console.log('mySliceNumbers', mySliceNumbers)

// console.log(numbers === mySliceNumbers) // false

//                              (с __ до __), не включая
const firstTwoElems = numbers.slice(0, 1)
// console.log('firstTwoElems', firstTwoElems)

// split()
let myString = 'my String'
// console.log(typeof myString, myString)
// console.log(myString[0])
// console.log(myString[1])
// console.log(myString[2])
// console.log(myString[3])
// console.log(myString[4])
// console.log(myString[5])
// console.log(myString[6])
// console.log(myString[7])
// console.log(myString[8])
// console.log(myString.length)

const arrayFromString1 = myString.split('')
// console.log(arrayFromString1)

const arrayFromString2 = myString.split(' ')
// console.log(arrayFromString2)

const arrayFromString3 = myString.split('s')
// console.log(arrayFromString3)

const arrayFromString4 = myString.split('S')
// console.log(arrayFromString4)

// join()
const myArray = ['I', 'Love', 'JavaScript']
// console.log(myArray.length)

let arrayToString1 = myArray.join(' ')
// console.log(arrayToString1)

let arrayToString2 = myArray.join('---')
// console.log(arrayToString2)

// // indexOf() & includes()
// console.log('myArray', myArray)

// console.log('myString', myString)

//                                 ADD
// unshift(el1, ..., el) ------------------------ push(el1, ..., el)
//                       |        array          |
//                       |  [0],[1],[2],[3]      |
//               shift() ------------------------ pop()
//                                  DELETE

const exampleArray = [1, 1, 2, 3, 4, 4]
// console.log(exampleArray)
const unshiftElem = exampleArray.unshift(0, 0)
// console.log(unshiftElem) // новый exampleArray.length
// console.log(exampleArray) //  [0, 0, 1, 1, 2, 3, 4, 4]

const pushElem = exampleArray.push(5, 5)
// console.log(pushElem) // новый exampleArray.length
// console.log(exampleArray) // [0, 0, 1, 1, 2, 3, 4, 4, 5, 5]

const shiftElem = exampleArray.shift()
// console.log(shiftElem) // удаленный элемент
// console.log(exampleArray) // [0, 1, 1, 2, 3, 4, 4, 5, 5]

const popElem = exampleArray.pop()
// console.log(popElem) // удаленный элемент
// console.log(exampleArray) // [0, 1, 1, 2, 3, 4, 4, 5]

// splice(idx, num) - delete elems
let deleteSplice = exampleArray.splice(1, 1)
// console.log(deleteSplice) // удаленный элемент
// console.log(exampleArray) // [0, 1, 2, 3, 4, 4, 5]

// перед idx удаляем 0 элементов и вставляем el1, ..., el
// splice(idx, 0, el1, ..., el) - add new elems
let addSplice = exampleArray.splice(1, 0, 'I', 'Love', 'Js')
// console.log(addSplice) // []
// console.log(exampleArray) // [0, "I", "Love", "Js", 1, 2, 3, 4, 4, 5]

// splice(idx, num, el1, ..., el) - replace elems
let replaceSplice = exampleArray.splice(7, 1, 'React', 'NodeJS')
// console.log(replaceSplice) // [4] удаленный элемент
// console.log(exampleArray) // [0, "I", "Love", "Js", 1, 2, 3, "React", "NodeJS", 4, 5]

// concat()
const firstPiece = [1, 2]
// console.log(firstPiece)

const secondPiece = [3, 4]
// console.log(secondPiece)

const thirdPiece = [5, 6]
// console.log(thirdPiece)

const fullArray = firstPiece.concat(secondPiece, thirdPiece)

// console.log(fullArray)
