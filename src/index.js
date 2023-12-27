const city = document.querySelectorAll('city')
const condition = document.getElementById('condition')
const temp = document.getElementById('temp')
const high = document.getElementById('high')
const low = document.getElementById('low')


async function getWeather(location) {
  location = location.replace(" ","-")
  const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=03a0a509d6ee48609eb80436232612&q=${location}`)
  const info = await response.json()
  console.log(info)
  return info
}

function changeInfo(info) {
  const cityTemp = info.current.temp_c
  temp.textContent = `${cityTemp}&#176`
  
  const conditionTemp = info.current.condition.text
  condition.textContent = `${conditionTemp}`

  
}

getWeather("Yorba Linda")