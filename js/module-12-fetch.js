console.log(`fetch`)

// let module = `module-12`
// //   https://goit.global/javascript/ru/v1/module-12/rest-api.html
// const BASE_URL = `https://goit.global/`
// let endPoint = `javascript`
// let params = `/ru/v1/${module}/rest-api.html`

// ===========
let API_KEY = `563492ad6f91700001000001390f9fee0a794c1182a72e49e0e0eae2`
const base_url = `https://api.pexels.com/v1/`
let end_point = `search`

// GET - получить
// POST - отправить на хранение
// PUT || PATCH - изменить существующий объект в БД
// DELETE - удалить что-то
const option = {
  //   method: `GET`, // POST || PUT || PATCH || DELETE
  headers: {
    Authorization: API_KEY,
  },
  //   body: {}, // POST || PUT || PATCH
}
const inputSearch = document.getElementById('searchValue')
const resultsList = document.getElementById('results')

inputSearch.addEventListener('change', (e) => {
  console.log(e.target.value)
  let inputValue = e.target.value
  let query_params = `?query=${inputValue}`
  let url = base_url + end_point + query_params
  fetch(url, option)
    .then((result) => {
      // result.json()
      console.log('result', result)
      return result.json()
    })
    .then((data) => {
      console.log('data', data)
      return data.photos
    })
    .then((photos) => {
      console.log('photos', photos)
      let markup = photos.map((photo) => {
        return `<li>
        <img src="${photo.src.tiny} alt="">
      </li>`
      })
      resultsList.insertAdjacentHTML('afterbegin', markup)
    })
    .catch((err) => {
      console.log(err)
    })
})

