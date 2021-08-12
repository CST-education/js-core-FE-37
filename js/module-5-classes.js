// CLASS
// class Class {
//   // тут создаем свойства
//   constructor(prop1 = 0, prop2 = 1) {
//     this.prop1 = prop1
//     this.prop2 = prop2
//   }
//   // тут добавляем методы
//   // method: function (params) {} // ES5
//   // ES6
//   method1() {
//     console.log(this.prop1)
//   }
//   method2(value) {
//     return (this.prop2 = value)
//   }
// }

// EXAMPLES
// ИСХОДНЫЙ КЛАСС
class User {
  constructor(login, password) {
    this.login = login
    this.password = password
  }
  showLogin() {
    console.log(this.login)
  }
}
// Экземпляр исходного класса
const user1 = new User('user1', 'qweqwe')
// console.log(user1)

// НОВЫЙ (НАСЛЕДУЕМЫЙ) на базе ИСХОДНОГО
class NewUser extends User {
  constructor(name, age, login, password) {
    // инициализизуем исходный класс
    super(login, password)
    this.name = name
    this.age = age
  }
  updateAge() {
    // this.age += 1
    return (this.age += 1)
  }
}
// Экземпляр нового класса
const newUser1 = new NewUser('Anatoliy', 18, 'Tolik', 'qazxsw')
// console.log(newUser1)
// console.log(newUser1.updateAge())
// newUser1.showLogin()

// свойства-аксессоры getter & setter

class BaseProduct {
  constructor(title, price) {
    this._title = title
    this._price = price
  }
  //   get & set
  get price() {
    return this._price
  }
  set price(value) {
    return (this._price = value)
  }

  get title() {
    return this._title
  }
  set title(value) {
    return (this._title = value)
  }
}

const baseProduct = new BaseProduct('Banana', 25)
// console.log(baseProduct)

// console.log('свойство _price:', baseProduct._price) // ПЛОХО
// console.log('by getter price:', baseProduct.price) // ХОРОШО
baseProduct.price = 35 // это вызов СЕТТЕРА
// console.log('by getter price:', baseProduct.price)

// console.log('свойство _title:', baseProduct._title) // ПЛОХО
// console.log('by getter title:', baseProduct.title) // ХОРОШО
baseProduct.title = 'Orange' // это вызов СЕТТЕРА
// console.log('by getter title:', baseProduct.title)

// STATIC PROPS & METHODS

class Comment {
  static name = 'Anonim'
  static showName() {
    console.log(this.name)
  }
  constructor(author, text) {
    this.author = author
    this.text = text
  }
}
const comment1 = new Comment('Pushkin', 'Lorem ipsum dolor sit amet')
console.log(comment1)
console.log(comment1.author)
console.log(comment1.text)
console.log(comment1.name) // undefined
// comment1.showName() // Error - is not a function
console.log(Comment.name)
Comment.showName()