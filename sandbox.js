// async & await

const getTodos = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todoss')

  if (response.status !== 200) {
    throw new Error('cannot fetch the data')
  }

  const data = await response.json()
  return data
}

getTodos()
  .then((data) => console.log('resolved: ', data))
  .catch((error) => console.log('rejected: ', error.message))

// fetch('https://jsonplaceholder.typicode.com/todos')
//   .then((response) => {
//     console.log('resolved', response)
//     return response.json()
//   })
//   .then((data) => {
//     console.log(data)
//   })
//   .catch((err) => {
//     console.log('rejected', err)
//   })

// const getTodos = (resource, callback) => {
//   const request = new XMLHttpRequest()

//   request.addEventListener('readystatechange', () => {
//     //   console.log(request, request.readyState)
//     if (request.readyState === 4 && request.status === 200) {
//       const data = JSON.parse(request.responseText)
//       callback(undefined, data)
//     } else if (request.readyState === 4) {
//       callback('could not fetch data', undefined)
//     }
//   })

//   request.open('GET', 'https://jsonplaceholder.typicode.com/todos')
//   request.send()
// }

// getTodos((err, data) => {
//   console.log('callback fired')
//   if (err) {
//     console.log(err)
//   } else {
//     console.log(data)
//   }
// })
