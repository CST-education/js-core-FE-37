'use strict'
// console.log(this)
// this - local variable
// this - is a pronoun of object for his props & methods
// определяется объектом, в контексте которого
// вызывается функция (expr || decl) not for arrow

// arrow this ссылается на контекст объекта, в котором
// эта функция была объявлена

// GLOBAL
// this without 'use strict' || module => window
function showThisDecl() {
  console.log(this)
}
// showThisDecl()

const showThisExpr = function () {
  // console.log(this)
}
// showThisExpr()

const showThisArrow = () => {
  console.log(this)
}
// showThisArrow()
// this with 'use strict' || module => undefined

// As Method
const user = {
  name: 'Sandra',
  age: 31,
  showName() {
    console.log(this.name)
    // ===========
    const showAge = () => {
      console.log(this.age)
    }
    // ===========
    showAge()
  },
}
// user.showName()

// user.showUserAge = showAge
// console.log(user)
// user.showUserAge()

// this without 'use strict' || module
// this with 'use strict' || module
const newUser = {
  name: 'Vova',
  age: 22,
}
// user.showName.call(newUser)

const bestUser = {
  name: 'Sara',
  age: 18,
}
// user.showName.apply(bestUser)

// Привязка объекта с Call & Apply с мгновенным вызовом
// Пример: вы зарегистрировались, отправив форму
// Из формы создан объект пользователя
// в объекте есть поле с именем
// которое можно использовать в качестве приветствия
// на странице личного кабинета
// В качестве других параметров могут служить переменные
// именем закрепленного менеджера и номером группы

function toSayHello(manager, group) {
  console.log(
    `${this.name}, we are glad to see you! I am ${manager}, 
    your manager. Your group is ${group}`,
  )
}
let manager = 'Petro'
let group = 37
// toSayHello.call(bestUser, manager, group)

const data = [manager, group]
// toSayHello.apply(newUser, data)

// this in CALLBACK - bind
const product = {
  name: 'Banana',
  price: 25,
  changePrice(value) {
    return (this.price = value)
  },
}
const fruit1 = {
  name: 'Ananas',
  price: 50,
}

function showProduct(product, callback) {
  let price = callback()
  console.log(price)
  console.log(`${product} cost ${price} now`)
}
// showProduct('fruit', product.changePrice.bind(product, 20))
// showProduct('fruit1', product.changePrice.bind(fruit1, 99))

// PRACTICE
// 1
function every(array, callback) {
  const results = []
  for (let elem of array) {
    let condition = callback(elem)
    // console.log(condition)
    results.push(condition)
  }
  // console.log(results)
  // if (results.includes(false)) {
  //   return false
  // } else {
  //   return true
  // }
  return results.includes(false) ? false : true
}
let result = every([1, 11, 111, 2, 22, 33], getLessThenTen)
// console.log(result)

result = every([1, 2, 3, 4, 5], getLessThenTen)
// console.log(result)

function getLessThenTen(number) {
  // if (number < 10) {
  //   return true
  // } else {
  //   return false
  // }
  return number < 10 ? true : false
}
function getMoreThenTen(number) {
  return number > 10 ? true : false
}
result = every([1, 2, 3, 23, 5], getMoreThenTen)
// console.log(result)

result = every([11, 21, 31, 23, 51], getMoreThenTen)
// console.log(result)

// 3
function compact(array, callback) {
  const newArray = []
  for (let value of array) {
    console.log(Boolean(value))
    // if (Boolean(value)) newArray.push(value)
    callback(value, newArray)
  }
  return newArray
}

function getFalsyValues(element, falsyValues) {
  if (!Boolean(element)) falsyValues.push(element)
}
function getNotFalsyValues(element, notFalsyValues) {
  if (Boolean(element)) notFalsyValues.push(element)
}

// console.log(compact([1, 0, '', null, 'Hello']))
// console.log(compact([Infinity, ' ', {}, []]))
// console.log(compact([1, 0, '', null, 'Hello'], getFalsyValues))
// console.log(compact([Infinity, ' ', {}, []], getNotFalsyValues))

// 4
const ordersA = [
  { name: 'Phone', price: 12300, deliveryProgress: 47, type: 0 },
  { name: 'Computer', price: 230000, deliveryProgress: 100, type: 1 },
  { name: 'Tablet', price: 5000, deliveryProgress: null, type: 2 },
]

const ordersB = [
  { name: 'Phone', price: 12300, deliveryProgress: 45, type: 0 },
  { name: 'Tablet', price: 5000, deliveryProgress: undefined, type: 2 },
]

function showDeliveryStatus(array) {
  let message
  let progress
  const results = []
  for (let order of array) {
    // console.log(order)
    // let { deliveryProgress: progress } = order
    progress = String(order.deliveryProgress)
    console.log(progress)
    // if (progress == 100) {
    //   message = `Done`
    //   results.push(message)
    // } else if (progress < 100 && progress >= 1) {
    //   message = `In progress`
    //   results.push(message)
    // } else if (progress === 'null') {
    //   message = `Ready to delivery`
    //   results.push(message)
    // } else {
    //   message = 'Not Ordered'
    //   results.push(message)
    // }
    // =========
    switch (progress) {
      case "100":
        message = `Done`
        results.push(message)
        break
      case progress < 100 ? progress : null:
        message = `In progress`
        results.push(message)
        break
      case 'null':
        message = `Ready to delivery`
        results.push(message)
        break
      default:
        message = 'Not Ordered'
        results.push(message)
    }
    // =========== 
    // // == Саша Палатный
    // switch (progress) {
    //   case '100':
    //     message = 'Done'
    //     results.push(message)
    //     break
    //   case 'null':
    //     message = 'Ready for delivery'
    //     results.push(message)
    //     break
    //   default:
    //     if (progress < 100) {
    //       message = 'In progress'
    //       results.push(message)
    //       break
    //     }
    // }
    // // == Саша Палатный

  }
  return results.join(', ')
}
console.log(showDeliveryStatus(ordersA))
console.log(showDeliveryStatus(ordersB))
