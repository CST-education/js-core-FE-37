// const refs = {
//   propagation: document.querySelector('.propagation'),
//   articleProp: document.getElementById('article-prop'),
//   articleList: document.getElementById('article-list'),
// }
import references from '../references/refs.js'
// console.log('IntersectionObserver:', references)
const { propagation, articleProp, articleList, myBtn } = references

// console.dir(IntersectionObserver)

const options = {
  root: articleList,
  //   rootMargin: '5px 5px 5px 5px',
  threshold: 0,
}
function callback(elems) {
  console.log(elems)
  if (elems[0].isVisible) {
    console.log(`ok`)
  }
}
const myObserver = new IntersectionObserver(callback, options)

// console.log('экземпляр наблюдателя', myObserver)

myObserver.observe(myBtn)
