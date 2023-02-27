import { useState } from 'react'
import reactLogo from './assets/react.svg'
//import './App.css'
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import {logo} from './assets'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    <h1>
    hola mundo
    </h1>
    </div>
  )
}

export default App
