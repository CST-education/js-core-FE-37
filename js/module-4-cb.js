// High-order function

function highOrder(value, callback) {
  //   console.log(`Hello, I am high Order function`)
  callback(value)
}
highOrder(`Hello, I am callback`, setMessage)

// Callback function
function setMessage(message) {
  // console.log(message)
}

//   // setMessage(`Hello, I am callback`)

// EXAMPLE 1 ================
function toDoMeal(prods, zzz) {
  // console.log(prods)
  let result = zzz(prods)
  console.log(result)
  // console.log(`Your dish -`)
}
// toDoMeal(['bread', 'meat'], toDoSandwich)
// toDoMeal(['banana', 'orange'], toDoSandwich)
// Callback
function toDoSandwich(arr) {
  // console.log(arr)
  let bread = arr.includes('bread')
  // console.log(bread)
  return bread ? 'sandwich is done!' : `no bread`
}
// EXAMPLE 2 ================
const results = [{ mail: '', scores: 10 }]
function getResultsByTests(getMax, getMin, mail, ...scores) {
  // console.log(mail)
  // console.log(scores)
  // 1 добавляем в базу данные о тесте
  let total = 0
  for (let i of scores) {
    total += i
  }
  // console.log(total)
  const obj = { mail, scores: total }
  results.push(obj)
  // console.log(results)
  // 2 теперь проверяем обновленные с помощью колбеков
  const scoresArr = []
  for (let obj of results) {
    // console.log(obj.scores)
    scoresArr.push(obj.scores)
  }
  // console.log(scoresArr)
  let max = getMax(scoresArr)
  let min = getMin(scoresArr)
  console.log('max:', max, 'min:', min)
}
getResultsByTests(
  getMaxValue,
  getMinValue,
  'a@gmail.com',
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
)
getResultsByTests(
  getMaxValue,
  getMinValue,
  'a@gmail.com',
  1,
  1,
  0,
  1,
  1,
  0,
  1,
  1,
  1,
)
// Callbacks
function getMaxValue(arr) {
  return Math.max(...arr)
}
function getMinValue(arr) {
  return Math.min(...arr)
}

// EXAMPLES
// GLOBAL VARIABLE
let firstNum = 10000
const getF = (count, callback) => {
  // local variable
  let firstNum = 0
  let secondNum = 1
  const arrWithValues = [firstNum, secondNum]
  // хочу получить массив с числами такой последовательности
  // console.log(arrWithValues)
  for (let i = 3; i <= count; i++) {
    let newNumber = firstNum + secondNum
    arrWithValues.push(newNumber)
    // console.log('newNumber', newNumber)
    firstNum = secondNum
    secondNum = newNumber
  }
  console.log(arrWithValues)

  let result = callback(arrWithValues)
  return result
}
console.log('Только четные', getF(18, getEvenValue))
console.log('Сумма всех', getF(7, getSum))

// Callback
function getEvenValue(arr) {
  const arrValues = []
  for (let num of arr) {
    if (num % 2 === 0) {
      arrValues.push(num)
    }
  }
  return arrValues
}
function getSum(arr) {
  let total = 0
  for (let i of arr) {
    total += i
  }
  return total
}

// console.log(firstNum)

//   const toGetFibonacci = function (value, cb) {
//     let firstNumber = 0
//     let secondNumber = 1
//     const sequence = [firstNumber, secondNumber]
//     for (let i = 1; i <= value; i++) {
//       let number = firstNumber + secondNumber
//       firstNumber = secondNumber
//       secondNumber = number
//       sequence.push(number)
//     }
//     //   let result = cb(sequence)
//     //   return result
//     return cb(sequence)
//   }
//   // console.log('toGetFibonacci', toGetFibonacci(10, getSumm))

//   function getSumm(arr) {
//     let total = 0
//     for (let i = 0; i < arr.length; i++) {
//       total += arr[i]
//     }
//     return total
//   }
//   const numbers = [1, 2, 3, 4, 5]

//   function myFunc(arr, callback) {
//     return callback(arr)
//   }

//   // console.log('myFunc', myFunc(numbers, getSumm))

//   // Abstruction
//   function getFibonacciSequence(n, callback) {
//     const fibonacciSequence = []
//     let num1 = 0
//     let num2 = 1
//     for (let i = 0; i <= n; i++) {
//       let num = num1 + num2
//       num1 = num2
//       num2 = num
//       fibonacciSequence.push(num)
//     }
//     //   console.log('fibonacciSequence: ', ...fibonacciSequence)
//     let result = callback(fibonacciSequence)
//     //   console.log('result:', result)
//   }
//   // getFibonacciSequence(10, getSum)

//   function getSum(arr) {
//     let total = 0
//     for (let i = 0; i < arr.length; i++) {
//       total += arr[i]
//     }
//     return total
//   }
//   const array = [
//     { name: 'Alice', age: 18 },
//     { name: 'Dick', age: 19 },
//     { name: 'Alan', age: 17 },
//     { name: 'Bob', age: 20 },
//     { name: 'Fill', age: 21 },
//     { name: 'Barbra', age: 16 },
//     { name: 'Sarah', age: 17 },
//   ]

//   function getStudentByAge(arr) {
//     console.log(arr)
//     const filteredStudents = []
//     for (let i = 0; i < arr.length; i++) {
//       console.log(arr[i])
//       let condition = arr[i].age >= 18
//       console.log('condition', condition)
//       if (condition) {
//         filteredStudents.push(arr[i])
//       }
//     }
//     console.log(filteredStudents)
//   }
//   // getStudentByAge(array)

//   function getYoungStudents(arr) {
//     const array = []

//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i].age < 18) {
//         array.push(arr[i])
//       }
//     }
//     return array
//   }
//   function getOldStudents(arr) {
//     const array = []
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i].age >= 18) {
//         array.push(arr[i])
//       }
//     }
//     return array
//   }

//   function getNames(arr) {
//     const names = []
//     for (let i = 0; i < arr.length; i++) {
//       // console.log(arr[i].name)
//       names.push(arr[i].name)
//     }
//     return names
//   }

//   function getStudents(cb, arr) {
//     return cb(arr)
//   }
//   const youngStudents = getStudents(getYoungStudents, array)
//   // console.log(youngStudents)

//   const oldStudents = getStudents(getOldStudents, array)
//   // console.log(oldStudents)

//   const studensNames = getStudents(getNames, array)
//   // console.log(studensNames)

//   const studentsGoIT = [
//     { name: 'Vitali', age: 18 },
//     { name: 'Alisa', age: 19 },
//     { name: 'Khristina', age: 17 },
//     { name: 'Andrii', age: 20 },
//     { name: 'Roman', age: 21 },
//     { name: 'Oleh', age: 16 },
//     { name: 'Ira', age: 17 },
//   ]

//   const studentsNamesGoIt = getStudents(getNames, studentsGoIT)
//   // console.log(studentsNamesGoIt)

//   // Отфильтровать элементы массива, прощедшие проверку условия

//   function filterArray(arr, cb) {
//     const filteredArray = []
//     for (let i = 0; i < arr.length; i++) {
//       let elem = cb(arr[i])
//       if (elem) {
//         filteredArray.push(elem)
//       }
//     }
//     return filteredArray
//   }
//   // console.log(filterArray(array, filterByAge))

//   function filterByAge(obj) {
//     if (obj.age >= 18) return obj
//   }
