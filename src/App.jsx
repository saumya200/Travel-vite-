import { useState } from 'react'
//import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './Component/Navbar/Navbar'
import Section from './Component/Section/Section'


function App() {
  const [count, setCount] = useState(0)
  

  return (
    <div className="App">
      <Navbar/>
     <Section/>
    </div>
  )
}

export default App
