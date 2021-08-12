// console.log(`ok`)
// ==================== 1st ===============
function Post(title = 'title', text = 'Lorem ipsum dolor...') {
  this.title = title
  this.text = text
}
Post.prototype.updateTitle = function (value) {
  return (this.title = value)
}
const post1 = new Post()
// console.log(post1)
// ==================== 2nd ===============

function NewPost(imageUrl = '', title, text) {
  Post.apply(this, [title, text])
  this.image = imageUrl
}

// console.log(NewPost.prototype)
NewPost.prototype = Object.create(Post.prototype)
NewPost.prototype.constructor = NewPost

NewPost.prototype.updateImage = function (url) {
  return (this.image = url)
}

const newPost1 = new NewPost(
  'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Alone_in_Space_-_Astronomers_Find_New_Kind_of_Planet.jpg/1024px-Alone_in_Space_-_Astronomers_Find_New_Kind_of_Planet.jpg',
)
// console.log(newPost1)

// ==================== 3rd ===============
function BestPost(author, imageUrl, title, text) {
  NewPost.call(this, imageUrl, title, text)
  this.author = author
}
BestPost.prototype = Object.create(NewPost.prototype)
BestPost.prototype.constructor = BestPost

BestPost.prototype.showAuthor = function () {
  console.log(this.author)
}

// new
const bestPost1 = new BestPost('Anatoliy')
// console.log(bestPost1)
// bestPost1.showAuthor()
bestPost1.updateImage('https://')
bestPost1.updateTitle('My new Post about Js')

// CLASSES ES6

class BaseProduct {
  constructor(name, price, category) {
    this.name = name
    this._price = price
    this.category = category
  }
  get price() {
    return this._price
  }
  set price(value) {
    return (this._price = value)
  }
}

class WeightProduct extends BaseProduct {
  constructor(weight, name, price, category) {
    super(name, price, category)
    this.weight = weight
  }
  getTotalCost() {
    console.log(this.weight * this.price)
  }

  decrWeight(value) {
    return this.weight - value < 0
      ? 'товара недостаточно на складе'
      : (this.weight -= value)
  }
  incWeight(value) {
    return (this.weight += value)
  }
}
const weightProduct = new WeightProduct(2.5, 'Lemon', 30, 'fruits')
// console.log(weightProduct)
// weightProduct.getTotalCost()
// console.log('остаток:', weightProduct.decrWeight(2))
// console.log(`остаток: ${weightProduct.decrWeight(2)}`)
// console.log('после прихода товара:', weightProduct.incWeight(5))

// ====================

class CountProduct extends BaseProduct {
  constructor(count, name, price, category) {
    super(name, price, category)
    this.count = count
  }
  getTotalCost() {
    console.log(this.count * this.price)
  }
  decCount(value) {
    return this.count - value < 0
      ? `нет столько шоколада для тебя!`
      : (this.count -= value)
  }
  incCount(value) {
    return (this.count += value)
  }
}

const countProduct = new CountProduct(100, 'snickers', 25, 'sweets')
console.log(countProduct)
countProduct.getTotalCost()

console.log('остаток:', countProduct.decCount(100))
console.log('после прихода товара:', countProduct.incCount(200))
