const city = document.getElementById('city')
const condition = document.getElementById('condition')
const temp = document.getElementById('temp')
const high = document.getElementById('high')
const low = document.getElementById('low')
const search = document.querySelector('.search')

async function getCurrent(location) {
  location = location.replace(" ","-")
  const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=03a0a509d6ee48609eb80436232612&q=${location}`)
  const info = await response.json()
  console.log(info)
  return info
}

async function getFuture(location){
  location = location.replace(' ','-')
  const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=03a0a509d6ee48609eb80436232612&q=${location}`)
  const info = await response.json()
  console.log(info)
  return info
}

function changeInfo(info) {
  const tempTemp = info.current.temp_f
  temp.textContent = `${tempTemp}` + String.fromCharCode(176)
  
  const conditionTemp = info.current.condition.text
  condition.textContent = `${conditionTemp}`
 
  const cityTemp = info.location.name
  city.textContent = `${cityTemp}`

}

function changeFuture(info) {
  const highTemp = info.forecast.forecastday[0].day.maxtemp_f
  const lowTemp = info.forecast.forecastday[0].day.mintemp_f

  high.textContent = `H:${highTemp}` + String.fromCharCode(176)
  low.textContent = `L:${lowTemp}` + String.fromCharCode(176)
}


search.addEventListener('submit',(e) => {
  e.preventDefault()
  const city = e.target[0].value
  const current = getCurrent(city)
  current.then(function(response){
    changeInfo(response)
  })
  const future = getFuture(city) 
  future.then(function(response){
    changeFuture(response)
  })
  // changeInfo(current)
})

