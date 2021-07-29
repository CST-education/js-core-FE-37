const product = {
  title: 'mask',
  price: 100,
  values: ['50ml', '30ml', '100ml'],
}

function showTitle(name) {
  console.log(`this product is ${name}`)
}
showTitle('Parfum')
// console.log(product.title)

// showTitle(product.title)
const { title: myTitle } = product
// showTitle(myTitle)

const products = {
  parfums: {
    male: [
      {
        title: 'Home',
        name: 'Dior',
        price: 3000,
      },
    ],
    female: [
      {
        title: 'Jadore',
        name: 'Dior',
        price: 2800,
      },
    ],
  },
  masks: {},
}
// console.log('prop:', products.parfums.female[0].title)

let title = products.parfums.female[0].title
// console.log('title:', title)

// Distructunig
// const { property1 } = obj
const { price, title: productTitle, name } = products.parfums.female[0]
// console.log('productTitle:', productTitle)
// console.log('name:', name)
// console.log('price:', price)

const { title: maleParfumTitle } = products.parfums.male[0]
// console.log('maleParfumTitle:', maleParfumTitle)

const { female, male } = products.parfums
// console.log(female, male)

const user = {
  login: 'nickname',
  pass: 'aldjncbw;hefiq2r8437ry8',
  userInfo: {
    email: '',
    phone: '',
  },
}
function sayHello(name) {
  alert(`${name} Hello!`)
}
const { login } = user
// sayHello(login)

// const myFavouriteMusic = {
//   rock: {
//     bands: ['Rammstein', 'Limp Biskit'],
//     songs: ['Du riest so gut'],
//   },
// }
// // 2nd level
// const {
//   rock: { bands, songs },
// } = myFavouriteMusic

// // console.log(bands)
// bands.push('Linkin Park')
// // console.log(bands)
// // console.log(songs)

// // 1st level
// const { rock: objectOfRock, rap = 'nothing for this time' } = myFavouriteMusic
// // console.log(objectOfRock)
// // console.log(rap)

// // ====================
const rgb = [255, 39, 45]
console.log(rgb)

// const [] = array

const [red, , blue] = rgb

console.log('red:', red)
// console.log('green:', green)
console.log('blue:', blue)
