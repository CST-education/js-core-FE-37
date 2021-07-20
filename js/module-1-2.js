// логические операторы
// // &&
// console.log('I Love JavaScript' && 1)
// //                         true && true
// console.log('React' && 1 && true)
// //            true && true && true
// console.log(0 && 'React' && 1)
// //      false && true && true
// console.log(0 && false && 'React' && 1)
// //      false && false && true && true

// example
let minPrice = 100
let maxPrice = 200
let currentPrice = 80

// if (currentPrice >= minPrice && currentPrice <= maxPrice) {
//   console.log(`Этот товар я могу купить сейчас`)
// } else {
//   console.log('Эта цена не подходит')
// }

// if (maxPrice <= currentPrice >= minPrice) {
//   console.log(`ok`)
// }
// console.log(minPrice <= currentPrice <= maxPrice)

// // ||
// console.log('true' || true)
// //          true || true
// console.log('true' || false)
// //          true || false
// console.log(false || 0 || NaN)
// //         false || false || false

if (currentPrice >= minPrice || currentPrice <= maxPrice) {
  //   console.log(`Этот товар я могу купить сейчас`)
} else {
  //   console.log('Эта цена не подходит')
}
let day = 'sun'
if (
  day === 'mon' ||
  day === 'tue' ||
  day === 'wed' ||
  day === 'thu' ||
  day === 'fri'
) {
  //   console.log(`${day} - будний день`)
} else {
  //   console.log('Это выходной!')
}

// // !
// console.log(!true)
// console.log(!0)
// console.log(!'object')
// console.log(!NaN)

// example
let enterPrompt = null

if (!enterPrompt) {
  //   console.log('Пользователь нажал ОТМЕНА')
}

// !!
// console.log(!!1)
// console.log(!!0)

// ветвления

// 1 - если
// if(condition){
//     statement
// }

// 2 - если и все остальные случаи
// if (condition) {
//   statement
// } else {
//   statement
// }

let age = 17
if (age >= 18) {
  console.log(`Вам можно!`)
} else {
  //   console.log(`Вам нельзя!!!`)
}

// Альтернатива if...else - тернарный оператор
// (condition) ? true : false
// age >= 18 ? console.log(`Вам можно!`) : console.log(`Вам нельзя!!!`)

// 3 - множественные условия
let a = 22
if (a > 0 && a <= 5) {
  console.log(`0-5`)
} else if (a > 5 && a <= 10) {
  console.log(`6-10`)
} else if (a > 10 && a <= 15) {
  console.log(`11-15`)
} else {
  //   console.log(`more then 15`)
}
switch (a) {
  case a > 0 && a <= 5:
    console.log(`0-5`)
    break
  case a > 5 && a <= 10:
    console.log(`6-10`)
    break
  default:
  // console.log(`switch more then 15`)
}

// day === 'mon' ||
// day === 'tue' ||
// day === 'wed' ||
// day === 'thu' ||
// day === 'fri'
// SWITCH
// full example
// switch (day) {
//   case 'mon':
//     console.log(`${day} - будний день`)
//     break
//   case 'tue':
//     console.log(`${day} - будний день`)
//     break
//   case 'wed':
//     console.log(`${day} - будний день`)
//     break
//   case 'thu':
//     console.log(`${day} - будний день`)
//     break
//   case 'fri':
//     console.log(`${day} - будний день`)
//     break
//   default:
//     console.log('Это выходной!')
// }
// short example
day = 'wed'
switch (day) {
  case 'mon':
  case 'tue':
  case 'wed':
  case 'thu':
  case 'fri':
    // console.log(`${day} - будний день`)
    break
  default:
    console.log('Это выходной!')
}

// // isNaN()
// // если реально не число - тру
// console.log(isNaN(NaN)) // true
// console.log(isNaN('NaN')) // true
// console.log(isNaN('true')) // true

// console.log(isNaN('false')) // true
// // console.log(Number('false')) // NaN => true

// console.log(isNaN('0,4')) // false

// // если число - фолс
// console.log(isNaN(0)) // false
// console.log(isNaN(1)) // false
// console.log(isNaN(1000000)) // false

// console.log(isNaN(Infinity)) // false
// console.log(isNaN('Infinity')) // false
// console.log(isNaN('0')) // false
// console.log(isNaN(0.4)) // false
// console.log(isNaN('0.4')) // false

// console.log(isNaN(true)) // false
// console.log(isNaN(false)) // false

// область видимости

let result = 1 // глобальная переменная

if (result > 0) {
  //   let result = 111 // локальная перемнная
  result += 10
  console.log('LOCAL:', result)
}
// let result = 100 // ERROR
console.log('GLOBAL:', result)

// циклы
const max = 10
let y = 10
let i = 0

// while (y < max) {
//   y = y + 1
//   i += 1
//   console.log(`итерация - ${i}:`, y)
// }

// do {
//   y = y + 1
//   i += 1
//   console.log(`итерация - ${i}:`, y)
// } while (y < max)

// ЦИКЛ СО СЧЕТЧИКОМ
// local i || j || k
//   старт   условие до    шаг итерации
//                       i++
//                       i = i + 1
for (let i = 0; i <= 10; i += 1) {
  if (i % 2 === 0) {
    console.log(`continue ${i}`)
    continue
  }
}

for (let i = 0; i <= 10; i += 2) {
  if (i % 2 === 0) {
    console.log(` break ${i}`)
    break
  }
}

