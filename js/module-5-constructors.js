// CONSTRUCTOR
function Constructor(prop1 = 0, prop2 = 1) {
  this.prop1 = prop1
  this.prop2 = prop2
}
// {///}   new
// call & construct
const newObj = new Constructor() // {}

// ИСХОДНАЯ ФУНКЦИЯ
const User = function (login, password) {
  this.login = login // login: ""
  this.password = password

  this.showLogin = function () {
    console.log(this.login)
  }
}

//
User.prototype.showPassword = function () {
  console.log(this.password)
}
//

const user1 = new User('user', 'qweqwe')
console.log(user1)

console.log(User.prototype)

const user2 = new User('user2', 'ewqewq')
console.log(user2)

// НОВАЯ ФУНКЦИЯ НА БАЗЕ ИСХОДНОЙ
function NewUser(name, age, login, password) {
  User.apply(this, [login, password])
  this.name = name
  this.age = age
}
// Перезаписываем prototype новой функции
// и привязываем в него prototype из исходной функции
NewUser.prototype = Object.create(User.prototype)
NewUser.prototype.constructor = NewUser

// дбавляем новые методы в prototype новой функции
NewUser.prototype.updateAge = function () {
  return (this.age += 1)
}
// создаем экземпляр из новой функции
const newUser1 = new NewUser('Igor', 17, 'new user1', 'qwerty')
console.log(newUser1)

newUser1.showLogin()
newUser1.showPassword()
console.log(newUser1.updateAge())

// ==============
const regularObject = {}
// [[Prototype]] === __proto__
console.log(regularObject.prototype)
