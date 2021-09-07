// const refs = {
//   propagation: document.querySelector('.propagation'),
//   articleProp: document.getElementById('article-prop'),
//   articleList: document.getElementById('article-list'),
// } // это старый объект доступов, теперь все доступы в отдельном файле

import refs from '../references/refs.js'
// console.log('PROPAGATION: ', refs)
import galleryItems from '../references/images.js'
// console.log(galleryItems)
const { propagation, articleProp, articleList } = refs
// EVENT PROPAGATION

// Capture
// Target
// ====================
// Bubling

window.addEventListener('click', (e) => {
  console.log('window:', e)
})
propagation.addEventListener('click', (e) => {
  console.log('propagation:', e)
})
articleProp.addEventListener('click', (e) => {
  console.log('articleProp:', e)
})
articleList.addEventListener('click', (e) => {
  console.log('articleList-1:', e)
})
// ====================
// window.addEventListener('click', (e) => {
//   console.log('4 - window click')
// })
// propagation.addEventListener('click', (e) => {
//   console.log('3 - propagation click')
// })
// articleProp.addEventListener('click', (e) => {
//   console.log('2.1 - articleProp click')
//   //   e.stopPropagation()
//   //   e.stopImmediatePropagation()
// })
// articleProp.addEventListener('click', (e) => {
//   console.log('2.2 - articleProp click')
// })
// articleList.addEventListener('click', (e) => {
//   console.log('1 - articleList click')
// })

// // EVENT DELEGATION
// articleList.addEventListener('click', () => {
//   console.log(`я слушаю click у всех тегов li и их потомков`)
// })
articleList.addEventListener('click', (e) => {
  //   console.log(e)
  console.log('articleList-2:', e.target.attributes.name.value)
  //   e.stopPropagation() // все обработчики на этом же элементе будут вызваны, а выше уже нет
  e.stopImmediatePropagation()
  //   console.log(e.target.textContent)
  //   console.log(e.target.nodeName)
  //   console.log(e.target.getAttribute('name')) - need to fix
})
// articleList.addEventListener('click', (e) => {
//   console.log('articleList-1:', e)
// })
