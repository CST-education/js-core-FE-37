console.log(`ok`)
// ==================== 1st ===============
function Post(title = 'title', text = 'Lorem ipsum dolor...') {
  this.title = title
  this.text = text
}
Post.prototype.updateTitle = function (value) {
  return (this.title = value)
}
const post1 = new Post()
console.log(post1)
// ==================== 2nd ===============

function NewPost(imageUrl = '', title, text) {
  Post.apply(this, [title, text])
  this.image = imageUrl
}

console.log(NewPost.prototype)
NewPost.prototype = Object.create(Post.prototype)
NewPost.prototype.constructor = NewPost

NewPost.prototype.updateImage = function (url) {
  return (this.image = url)
}

const newPost1 = new NewPost(
  'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Alone_in_Space_-_Astronomers_Find_New_Kind_of_Planet.jpg/1024px-Alone_in_Space_-_Astronomers_Find_New_Kind_of_Planet.jpg',
)
console.log(newPost1)

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
console.log(bestPost1)
bestPost1.showAuthor()
bestPost1.updateImage('https://')
bestPost1.updateTitle('My new Post about Js')
