// Объявление (создание)
// FUNCTION EXPRESSION
// myFunc() // нельзя вызывать до объявления
const myFunc = function (param1, param2) {
  // перечисляем действия - инструкции, которые должны выполниться
  console.log(
    `Это функциональное выражение с параметрами ${param1} & ${param2}`,
  )
  //   console.log(param1, param2)
}
// FUNCTION DECLARATION
// myFuncDecl() // МОжно вызвать до объявления
function myFuncDecl(param) {
  console.log(`Это декларативное объявление`)
}

// ARROW FUNCTION - ES6
// myArrowFunc() // нельзя вызывать до объявления
const myArrowFunc = (param1) => {
  // перечисляем действия - инструкции, которые должны выполниться
  console.log(`Это стрелочная функция`)
}

// Вызовы функций
// myFunc('Hello', 'Baby')
// myFuncDecl()
// myArrowFunc()
let user
// PARAMS & ARGUMENTS
// default params
function toSayHello(userName = 'User') {
  alert(`${userName}, рады вас приветствовать!!!`)
}
// toSayHello('sandra')
// toSayHello(user)

function showInfo(userName, userAge) {
  console.log(`Hello, my name is ${userName}. I am ${userAge} years old`)
}
// showInfo('Sandra', 31)

// arguments & ...args
function getResult(...allParams) {
  //   console.log(arguments)
  //   console.log('allParams', allParams)
  for (let elem of arguments) {
    // console.log(elem)
  }
  //   arguments.push(1)
  //   Преобразование псевдомассива в полноценный массив
  const myArgs = Array.from(arguments)
  //   console.log(myArgs)
  myArgs.push(1)
  //   console.log(myArgs)
}
getResult(0, 1, 2, 3, 4, 5, 6)
getResult()

const getArrayRes = (...allParams) => {
  //   console.log(arguments)
  //   console.log(allParams)
}
getArrayRes(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)

// Guard Clause

function getValue(array, value) {
  //   console.log(array)
  for (let i = 0; i < array.length; i += 1) {
    // console.log(`iteration-${i + 1}`)
    if (array[i] === value) return `Значение ${value} есть в массиве`
  }
  return `Значение ${value} отсутствует в массиве`
}
let result = getValue([1, 2, 3, 4, 5, 6, 7, 1, 1, 1, 1, 1], 1)
// console.log(result)
result = getValue([1, 2, 3, 4, 5, 6, 7], 8)
// console.log(result)

function getSpam(text, words) {
  //   console.log(text)
  //   console.log(words)
  let i = 0
  for (let word of words) {
    i++
    console.log(word, i)
    if (text.includes(word)) return `SPAMMMM!!!!`
  }
  return text
}
const arr = ['volptatum', 'oficia']
let value = `corporis, officia blanditiis, voluptatum illo aliquam tempore molestias minus eos architecto dolorum sit sapiente commodi sunt neque odio ipsum exercitationem tenetur laborum veniam fugiat error explicabo? Enim reprehenderit repudiandae voluptatum laborum, molestias rem ut ducimus doloribus saepe tempora illum recusandae blanditiis amet quod omnis, at dolore porro maiores quam accusamus labore eveniet, reiciendis praesentium. Facilis dolore excepturi facere deleniti? Incidunt, deleniti blanditiis? Impedit consequuntur deserunt a! Porro libero inventore impedit maiores error?`
// console.log(getSpam(value, arr))

// ARRROW FUNC & RETURN

// const getTotal = (a, b) => {
//   return a + b
// }

const getTotal = (a, b) => a + b

console.log(getTotal(2, 5))

const greet = (user) => `Hello ${user}`
console.log(greet('World!'))

// 1

function checkYear(year) {
  let condition = year % 4 === 0
  if (condition) return `${year} високосный`
  return `${year} не високосный`
}
console.log(checkYear(2021))

// 2

function game() {
  let comp = Math.ceil(Math.random() * (10 - 1) + 1)
  let user = prompt('Введите число от 1 до 10')
  console.log(comp, user)
  //   console.log()
  if (comp == user) return 'You are win'
  return `You lose`
}
// console.log(game())

// 3
function getMathResult() {
  let num1 = prompt('`Enter the first number')
  let num2 = prompt('`Enter the second number')
  let symbol = prompt('`Enter the symbol')
  let total = 0
  console.log(num1, num2, symbol)
  switch (symbol) {
    case '+':
      total = Number(num1) + Number(num2)
      break

    case '-':
      total = num1 - num2
      break

    case '*':
      total = num1 * num2
      break
    case '/':
      total = num1 / num2
      break

    default:
      console.error(`ERROR`)
  }
  return total
}
// console.log('result', getMathResult())
console.log(2 + 2 + '2')
console.log(2 + "2" + '2')
console.log("2" + 2 + 2)


