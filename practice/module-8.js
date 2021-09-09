// ИМПОРТ ДАННЫХ ДЛЯ СОЗДАНИЯ РАЗМЕТКИ (data)
import data from '../data/module-8.js'
// console.log(data)
// ИМПОРТ ДОСТУПОВ К DOM-ЭЛЕМЕНТАМ (refs)
import refs from '../references/refs.js'
const { list, modal, closeBtn, form } = refs
// console.log(list, modal, form)
// ШАБЛОН РАЗМЕТКИ
const item = `
        <li class="item">
          <div class="imgWrapper">
            <img src="https://images.pexels.com/photos/3024453/pexels-photo-3024453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="img" />
          </div>
          <div class="cardInfo">
            <h3 class="title">Thousands</h3>
            <p class="text">
              Thousands of good, calm, bourgeois faces thronged the windows, the
              doors, the dormer windows, the roofs, gazing at the palace, gazing
              at the populace, and asking nothing more; for many Parisians
              content themselves with the spectacle of the spectators, and a
              wall behind which something is going on becomes at once, for us, a
              very curious thing indeed.
            </p>
            <button class="link" type="button">open here</button>
          </div>
        </li> 
`
// ФУНКЦИЯ СОЗДАНИЯ РАЗМЕТКИ
function createItems(array) {
  return array
    .map((elem) => {
      const { image, title = 'TITLE', text, button } = elem
      // console.log(image, title, text, button)
      return `
        <li class="item">
          <div class="imgWrapper">
            <img src=${image} alt=${title} />
          </div>
          <div class="cardInfo">
            <h3 class="title">${title}</h3>
            <p class="text">${text}</p>
            <button class="link" type="button">${button}</button>
          </div>
        </li>`
    })
    .join('')
}
// вызываем createItems, передаем данные и джоиним
const markup = createItems(data)
// console.log(markup)

// ВСТРАИВАНИЕ СОЗДАННОЙ РАЗМЕТКИ
list.insertAdjacentHTML('afterbegin', markup)
// СОЗДАЕМ НАБЛЮДАТЕЛЯ

// 1 - создаем экземпляр Observer
const options = {
  root: list, // относительно кого проверяем видимость элемента
  rootMargin: '0px', // внешние отступы root, поэтому
  // задаем с -
  threshold: 0.5, // на сколько проверяемый элемент должен
  // попасть в зону видимости root
}
const observer = new IntersectionObserver(callback, options)
function callback(entries) {
  entries.forEach((entry) => {
    entry.isIntersecting
      ? entry.target.classList.add('observe')
      : entry.target.classList.remove('observe')
  })
}

// 2 - получаем массив элементов items, к которым применим Observer (...list.children)
const items = [...list.children]

// 3 - вызываем экземпляр наблюдателя на каждом элементе списка
items.forEach((item) => observer.observe(item))

// ДОБАВЛЯЕМ ОТКРЫТИЕ МОДАЛЬНОГО ОКНА

function showElement(element) {
  element.classList.remove('isHidden')
}

function hideElement(element) {
  element.classList.add('isHidden')
}

list.addEventListener('click', (e) => {
  const condition = e.target.nodeName === 'BUTTON'
  // console.log(condition)
  if (condition) {
    // modal.classList.remove('isHidden')
    showElement(modal)
  }
})
// Закрываем модальное окно
//  по бекдропу
modal.addEventListener('click', closeModalByClick)
function closeModalByClick(e) {
  if (e.target.classList.contains('closeModal')) {
    hideElement(modal)
  }
}
//  по Escape ArrowLeft ArrowRight
window.addEventListener('keydown', closeModalByKey)
function closeModalByKey(e) {
  if (
    e.code === 'Escape' ||
    e.code === 'ArrowLeft' ||
    e.code === 'ArrowRight'
  ) {
    hideElement(modal)
  }
}
//  по кнопке Х
closeBtn.addEventListener('click', closeModalByClick)

// зачищаем слушателя
if (!modal.classList.contains('isHidden')) {
  window.removeEventListener('keydown', closeModalByKey)
  modal.removeEventListener('click', closeModalByClick)
}
