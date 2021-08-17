let myName = 'Sandra'

console.log(myName)

function changeValue(value) {
  return (myName = value)
}
changeValue('Igor')
console.log(myName)

// =========

const scores = [13, 12, 14, 15, 16]

function getBestResult(results) {
  //   console.log(...results)
  //   console.log(Math.max(...results))
  return (results = Math.max(...results))
}
console.log(getBestResult(scores))
console.log(scores)

// ===========

const numbers = [1, 2, 3, 4, 5]

function updateArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    // console.log(arr)
    arr[i] += 1
  }
  return arr
}
console.log(updateArray(numbers))
