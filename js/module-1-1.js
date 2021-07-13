// мультипарадигменный
// кроссплатформенный
// кроссбраузерный
// ES5 - 2009 и ES6 - 2015 ECMAScript
// слабая типизация (динамическая)
// примитивы
// сложные

// Variables
// ES5
// console.log('myFirstVar:', myFirstVar) // undefined
var myFirstVar

// ES6
let mySecondVar
// console.log('mySecondVar:', mySecondVar) // undefined
mySecondVar = 'var by let'
// console.log('mySecondVar:', mySecondVar) // undefined
//
const myThirdVar = 'variable by const'
// console.log(myThirdVar)
// myThirdVar = "fjadsgfs" // НЕЛЬЗЯ переписать

// // Primitives & operator typeof
// console.log(undefined)
// console.log(typeof undefined)

// console.log('Sandra Hrevtsova')
// console.log(typeof 'Sandra Hrevtsova')

// console.log(100)
// console.log(typeof 100)

// console.log(true)
// console.log(typeof true)
// console.log(false)
// console.log(typeof false)

// console.log(null)
// console.log(typeof null)

// сложные типы - объекты, массивы и функции

// Приведение типов
// к этим не приводяься данные
// null
// undefined

// // а к этим типам можно привести любое значение
// // string
// let value
// console.log(value, typeof value)
// value = String(value)
// console.log(value, typeof value)

// value = 77
// console.log(value, typeof value)
// value = String(value)
// console.log(value, typeof value)

// value = true
// console.log(value, typeof value)

// value = value + '' // конкатенация
// console.log(value, typeof value)

// // number
// value = 'Hrevtsova'
// console.log(value, typeof value)

// value = Number(value)
// console.log(value, typeof value)
// // NaN - not a number

// value = '11'
// value = Number(value)
// console.log(value, typeof value)

// value = false
// console.log(value, typeof value)

// value = +value
// console.log(value, typeof value)

// value = true
// console.log(value, typeof value)

// value = Number(value)
// console.log(value, typeof value)

// // boolean
// value = '' // false
// console.log(value, typeof value)

// value = Boolean(value)
// console.log(value, typeof value)

// value = ' ' // true
// console.log(value, typeof value)

// value = Boolean(value)
// console.log(value, typeof value)

// value = 'Sandra' // true
// console.log(value, typeof value)

// value = Boolean(value)
// console.log(value, typeof value)

// value = 1 // true
// console.log(value, typeof value)

// value = Boolean(value)
// console.log(value, typeof value)

// value = 0 // false
// console.log(value, typeof value)

// value = Boolean(value)
// console.log(value, typeof value)

// value = NaN // false
// console.log(value, typeof value)

// value = Boolean(value)
// console.log(value, typeof value)

// value = null // false
// console.log(value, typeof value)

// value = Boolean(value)
// console.log(value, typeof value)

// value = undefined // false
// console.log(value, typeof value)

// value = Boolean(value)
// console.log(value, typeof value)

// value = false // false
// console.log(value, typeof value)

// value = Boolean(value)
// console.log(value, typeof value)

// // 6 falsy values
// console.log('false', '')
// console.log('false', 0)
// console.log('false', NaN)
// console.log('false', null)
// console.log('false', undefined)
// console.log('false', false)

// взаимодействие с пользователем
// let response = alert("Hello")
// ok => undefined

// let response = confirm('Вам есть 18?')
// ok => true
// cancel => false

// let response = prompt('Введите пожалуйста число')
// console.log(response)
// ok => value
// cancel => null

// осн операторы (матем и сравнения)
// console.log(1 + 1)
// console.log(2 - 1)
// console.log(3 * 4)
// console.log(10 / 2)

// console.log(2 ** 3)
// console.log(10 % 4)

// console.log(2 > 4);
// console.log(2 >= 2);

// // не строгое равенство
// console.log("'1' == 1", '1' == 1) //true
// //       string == number - тру, потому что
// // приведение типов произошло
// console.log('true == 1', true == 1)
// console.log('false == 0', false == 0)

// console.log('"5" == 1', '5' == 1)

// // не строгое неравенство
// console.log("'1' != 1", '1' != 1) //false
// //       string == number - false, потому что
// // приведение типов произошло и мы изменили результат на
// // противоположный, благодаря !
// console.log('true != 1', true != 1)
// console.log('false != 0', false != 0)

// console.log('"5" != 1', '5' != 1)

// // строгое равенство
// console.log('1' === 1) // false
// //       string === number
// console.log(1 === 1) // true
// console.log('true === 1', true === 1)
// console.log('false === 0', false === 0)

// // строгое неравенство
// console.log('1' !== 1) // true
// //       string !== number
// console.log(1 !== 1) // false
// console.log('true !== 1', true !== 1) // true
// console.log('false !== 0', false !== 0) // true

// // строки
// console.log('Hello')
// console.log('Hello')
// console.log(`Hello`)

// // concat
// let name = 'Sandra'
// let message = 'Hello, ' + name + 'We are glad to see you!'
// console.log(message)

// name = 'Anatolii'
// message = 'Hello, ' + name

// console.log(message)

// // `${}` - шаблонная строка и интерполяция

// message = `Hi, ${name}!`
// console.log(message)

// // toLowerCase() & toUpperCase()
// let nameInDB = 'hrevtsova'
// console.log(nameInDB.toUpperCase())

// let lastName = 'HREVT SOVA'
// console.log(lastName.toLowerCase())
// // length
// console.log(lastName.length)

// // includes() & indexOf()
// const myLove = 'I Love JavaScript!!!'
// console.log(myLove)

// console.log(myLove.includes('Love')) // true
// console.log(myLove.includes('love')) // false

// console.log(myLove.indexOf('Love')) // 2 - index
// console.log(myLove.indexOf('love')) // -1 - если не нашел совпадения

// числа
// parseInt()
// parseFloat()
// let weight = prompt('Укажи общий вес товара')
// console.log(weight, typeof weight)
// weight = parseFloat(weight)
// console.log(weight, typeof weight)

// let price = 30
// let total = weight * price
// console.log('total', total)

// 0.1+0.2
console.log(0.2 + 0.4)
console.log(0.1 + 0.2 === 0.3) // false

// 1 вариант
console.log((0.1 * 10 + 0.2 * 10) / 10 === 0.3)
console.log(Number((0.1 + 0.2).toFixed(1)) === 0.3)

// Math.ceil()
console.log(Math.ceil(0.1 + 0.2));
// Math.floor()
console.log(Math.floor(0.1 + 0.2));

// Math.round()
console.log(Math.round(0.1 + 0.2));
console.log(Math.round(0.3 + 0.2));


// логические операторы
// ветвления
// isNaN()
// область видимости
// циклы
