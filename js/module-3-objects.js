// console.log(typeof {}, {})
console.log({})

const obj = {
  // props (key: value,)
  prop_a: 'A',
  prop_b: 'B',
  prop_c: 2,
  prop_d: null,
  prop_e: true,
  name: 'Sandra',
  age: 31,
  isOnline: false,
  isStudent: true,
  skills: ['HTML', 'CSS'],
  music: {
    bands: ['Bi-2'],
    songs: ['hdfash'],
  },

  // methods
  // ES5
  showName1: function () {
    console.log('Hello')
  },
  // ES6
  showName2() {
    console.log('World')
  },
}
console.log(obj)

// Получить значения свойства в объекте GET READ
// console.log('name:', obj.name)
// console.log('age:', obj.age)
// obj.showName1()
// obj.showName2()

// console.log(obj['name'])
// console.log(obj['age'])

// Изменить значение свойства в объекте UPDATE

// console.log(obj.age)
obj.age = 18
// console.log(obj.age)

// такого свойства пока еще нет - поэтому undefined
// console.log(obj.languages)

// а теперь добавлю это свойство в объект POST CREATE
obj.languages = ['ukranian', 'russian', 'english']
// console.log(obj.languages)

// Удалить ненужное свойство в объекте (ну вдруг!)
// через delete DELETE
delete obj.age
// console.log(obj.age)
// console.log(obj)

// short props

let age = 30
// age: 30,
// console.log(age)
const skills = ['HTML', 'CSS']
// skills: ['HTML', 'CSS']
// console.log(skills)

const myUser = {
  age,
  skills,
}

// console.log(myUser)

// console.log(newObj)

// вычисляемые свойства obj[var]

let key1 = 'userName'
let key2 = 'lastName'
let key3 = 'skills'

const nextUser = {
  studentName: 'user',
  [key1]: 'user',
}

// console.log(nextUser)
// console.log('key1', obj[key1])
// console.log('key2', obj[key2])
// console.log('key3', obj[key3])

// console.log(obj)
// for in
for (let prop in nextUser) {
  // console.log('key', prop)
  //   console.log('value: ', obj[key])
}
const object = {}
for (let key in object) {
  console.log('key', key)
}

// console.dir(Object)
const product = {
  price: 10,
}
// console.log('grand pa', product)
// CREATE {}
const newProduct = Object.create(product)
// console.log('father', newProduct)

newProduct.price = 100

const newNewProd = Object.create(newProduct)
// console.log('new son', newNewProd)
newNewProd.title = 'product'

for (let key in newNewProd) {
  if (newNewProd.hasOwnProperty(key)) {
    // console.log('key of newNewProd', key)
    // console.log(newNewProd[key])
  }
}

// obj.hasOwnProperty()
// console.log(newNewProd.hasOwnProperty('price')) // false
// console.log(newProduct.hasOwnProperty('price')) // true

// Object.keys(obj) - массив ключей
const myKeys = Object.keys(obj)
console.log(myKeys)
console.log(myKeys[0]) // key at index 0

console.log(obj[myKeys[0]]) // A string
//          obj['prop_a']

// Object.values(obj) - массив значений
const myValues = Object.values(obj)
console.log(myValues)

const prod = {
  count: 2,
  price: 10,
}

const vals = Object.values(prod)
console.log(vals)
const totalPrice = vals[0] * vals[1]
console.log(totalPrice)

// Object.entries(obj) - многомерный массив в виде
// [[key1, value1], [key2, value2], [key3, value3]]

const myEntries = Object.entries(obj)
console.log(myEntries)

// & methods
// this
let nickname = 'BLA BLA BLA'
const user = {
  nickname: 'Super User',
  showUserName() {
    return `Hello, ${this.nickname}`
  },
}

console.log(user.showUserName())
