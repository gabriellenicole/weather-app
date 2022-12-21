const key = 've5VqNiYu5upxuvmRyZFB0bjrj0YFtDA'

//get city info
const getCity = async (city) => {
  const base = 'http://dataservice.accuweather.com/locations/v1/cities/search'
  const query = `?apikey=${key}&q=${city}`
  console.log(query)

  const response = await fetch(`${base}${query}`).catch((e) => null)
  const data = await response.json()
  console.log(data)
  return data[0]
}

//get weather info
const getWeather = async (id) => {
  const base = 'http://dataservice.accuweather.com/currentconditions/v1/'
  const query = `${id}?apikey=${key}`

  const response = await fetch(base + query)
  const data = await response.json()
  console.log(data)
  return data[0]
}
