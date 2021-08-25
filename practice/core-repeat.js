// // Максим
// // es6 classes

// // классы - это специальные функции - синтаксический сахар
// // имеют тело {}
// class MyClass {
//   // публичные поля (не в constructor), доступны экземплярам, но не классу
//   publicProp = 'main class'
//   // статические публичные свойства и методы, не доступны экземплярам
//   static staticProp = 'User Class'
//   // приватные поля (не в constructor и через #), не доступны экземплярам
//   #privateProp = 'private name' // доступны только внутри класса
//   // встроенные методы - constructor для инициализации экземпляров, всегда может быть только один
//   constructor(name = 'user') {
//     // свойства экземпляра - определяются внутри constructor
//     this.name = name
//   }
//   // методы прототипа, что будут доступны экземплярам
//   myClassMethod() {
//     console.log(`myClassMethod`)
//   }
// }
// const user = new MyClass('student')

// // console.log(user)

// // console.log(user.publicProp)
// // console.log(MyClass.publicProp)

// // console.log(user.staticProp)
// // console.log(MyClass.staticProp)

// // console.log(user.privateProp)
// // console.log(MyClass.privateProp)

// // новый класс на базе исходного
// class NewClass extends MyClass {
//   constructor() {
//     super()
//   }
// }

// const newUser = new NewClass()
// console.log(newUser)

// // console.log(newUser.publicProp)
// // console.log(NewClass.publicProp)

// // console.log(newUser.staticProp)
// // NewClass.staticProp = 'zzz'
// // console.log(NewClass.staticProp)
// // console.log(MyClass.staticProp)

// console.log(newUser.privateProp)
// console.log(NewClass.privateProp)

// ==================
// // Замыкания
// const prod = {
//   count: 2,
//   getMore() {
//     return (this.count += 1)
//   },
//   getLess() {
//     return (this.count -= 1)
//   },
// }
// // prod.getMore()
// // prod.getMore()
// // prod.getMore()
// // prod.getMore()
// // prod.getMore()
// // prod.getMore()
// // prod.getMore()

// // console.log(prod.count)

// function prodFunc() {
//   let count = 0
//   function getMore() {
//     return (count += 1)
//   }
//   function getLess() {
//     return (count -= 1)
//   }

//   return { getMore, getLess }
// }
// let result = prodFunc()
// const { getMore, getLess } = result
// console.log(getMore)

// console.log(getMore())
// console.log(getMore())
// console.log(getMore())
// console.log(getMore())
// console.log(getMore())

// // console.log(result())
// // console.log(result())
// // console.log(result())
// // console.log(result())

// // ==================
// // callback
// // HOF
// function hOf(callback1, callback2, num1, num2) {
//   let result = callback1(num1, num2)
//   callback2(result)
// }

// // создадим функции, которые будут переданы колбеками
// function firstFuncSum(a, b) {
//   return a + b
// }
// function firstFuncMult(a, b) {
//   return a * b
// }

// function seconFunc(value) {
//   console.log(value)
// }
// hOf(firstFuncSum, seconFunc, 2, 3)
// hOf(firstFuncMult, seconFunc, 2, 3)

// ============== Ternary
// let condition = true

// // if (condition) {
// //   console.log(`ok`)
// // }
// condition ? console.log(`ok`) : ""

// ================= 44
const users = [
  {
    name: 'Moore Hensley',
    email: 'moorehensley@indexia.com',
    eyeColor: 'blue',
    friends: ['Sharron Pace'],
    isActive: false,
    balance: 2811,
    gender: 'male',
  },
  {
    name: 'Sharlene Bush',
    email: 'sharlenebush@tubesys.com',
    eyeColor: 'blue',
    friends: ['Briana Decker', 'Sharron Pace'],
    isActive: true,
    balance: 3821,
    gender: 'female',
  },
  {
    name: 'Ross Vazquez',
    email: 'rossvazquez@xinware.com',
    eyeColor: 'green',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
    isActive: false,
    balance: 3793,
    gender: 'male',
  },
  {
    name: 'Elma Head',
    email: 'elmahead@omatom.com',
    eyeColor: 'green',
    friends: ['Goldie Gentry', 'Aisha Tran'],
    isActive: true,
    balance: 2278,
    gender: 'female',
  },
]

// const getTotalBalanceByGender = (users, gender) =>
//   users
//     .filter((user) => user.gender === gender)
//     .map((user) => user.balance)
//     .reduce((total, balance) => total + balance, 0)

// console.log(getTotalBalanceByGender(users, 'male'))
// console.log(getTotalBalanceByGender(users, 'female'))
// ================= 44

// =================== Object.key & Object['key']

// const user = {
//   name: 'user',
//   age: 30,
//   gender: 'female',
// }
// // console.log(user.name)

// let value = 'gender'
// // console.log(user[value])

// const prods = [
//   { count: 1, price: 10 },
//   { count: 2, price: 20 },
//   { count: 3, price: 30 },
//   { count: 4, price: 40 },
// ]

// function getValues(key, prods) {
//   for (let prod of prods) {
//     console.log(prod[key])
//   }
// }

// getValues('count', prods)
// getValues('price', prods)

// // =========== UNIQUE
// const arr1 = [1, 3, 3, 4, 5, 6, 4, 1]
// const arr2 = ['Js', 'HTML', 'CSS', 'REACT', 'Node', 'Js']
// function getWithoutUnique(values) {
//   // 1
//   // создаем пустой массив и запишем в него
//   const myValues = []

//   for (let i = 0; i < values.length; i++) {
//     // console.log(values[i])
//     // console.log(myValues[values[i]])
//     if (myValues[values[i]] === undefined) {
//       myValues[values[i]] = 0
//     }
//     // указываем, что делать, если индекс с таким значением уже был
//     myValues[values[i]] += 1
//   }
//   console.log('myValues', myValues, 'исходный', values)

//   //   2
//   //   создаем результирующий массив, который вернем из функции
//   const result = []
//   for (let i = 0; i < values.length; i++) {
//     // console.log(values[i])
//     if (myValues[values[i]] > 1) {
//       result.push(values[i])
//     }
//   }
//   console.log('result', result)
//   return result
// }
// // getWithoutUnique(arr1)
// // getWithoutUnique(arr2)
// // ====== 2 ==========
// console.log(arr1)

// function getValues(values) {
//   return values.filter(
//     (elem, idx, arr) =>
//       (arr.lastIndexOf(elem) !== idx || arr.indexOf(elem) !== idx) && true,
//   )
// }
// console.log(getValues(arr1))
// console.log(getValues(arr2))

// =========================
// function makeShef(shefName) {
//     // let shefName = shefName
//     return function makeDish(dish) {
//       console.log(`${shefName} готовит ${dish}`);
//     };
//   }

//   const shef1 = makeShef("Игорь");
//   const shef2 = makeShef("Олег");

//   shef1("суп");
//   shef1("пюре");

//   shef2("гречку");
