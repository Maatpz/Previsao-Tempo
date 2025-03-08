import { useState, useRef } from 'react'
import axios from 'axios'
import './App.css'
import ApiInfo from './components/ApiInfo/ApiInfo'

function App() {
  const [weather, setWeather] = useState()
  const inputRef = useRef()

  async function searchCity(){
    const city = inputRef.current.value
    const key = "b3d53f0518ac170713b9528acd29570a"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`

    
    const ApiInfo =  await axios.get(url)
    setWeather(ApiInfo.data)

    // console.log(ApiInfo)
  }

  return (
    <div>
      <h1>Previsão do tempo</h1>
      <input ref={inputRef} type="text" placeholder="Digite o nome da cidade" />
      <button onClick={searchCity}>Buscar</button>

      {weather && <ApiInfo weather={weather} />}
    
    </div>
    
       
  )
}

export default App
