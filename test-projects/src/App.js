import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import CalculatorScreen from "./app/calculator/CalculatorScreen"
import Dashboard from "./app/Dashboard"
import WordleScreen from "./app/wordle/WordleScreen"

function App() {
  return (
    <div className='App antialiasing'>
      <Router>
        <div>
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/wordle' element={<WordleScreen />} />
            <Route path='/calculator' element={<CalculatorScreen />} />
          </Routes>
        </div>
      </Router>
    </div>
  )
}

export default App
