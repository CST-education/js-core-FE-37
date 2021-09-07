// console.dir(_.throttle)
// _.throttle(callback, time)

// const refs = {
//   form: document.querySelector('.form'),
// }
import refs from '../references/refs.js'
// console.log('throttle:', refs)

const { form } = refs
// console.log(form)

form.addEventListener(
  'input',
  _.throttle((e) => {
    console.log('1', e.target.value)
  }, 1500),
)

form.addEventListener(
  'input',
  _.throttle((e) => {
    console.log('2', e.target.value)
  }, 3000),
)
