import { useState } from 'react'
import './App.css'
import Weather from './Components/Weather';
import SideNav from './Components/sideNav';

function App() {
  const [count, setCount] = useState(0)

  return (
    
      <div>
        <h1>Weather in Miami, MIA</h1>
        <SideNav />
        <Weather />
        
      </div>
  )
}

export default App
