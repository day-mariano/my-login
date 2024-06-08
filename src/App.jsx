import { useState } from 'react'
import './App.css'
import Login from './Pages/LoginPage'
// import HomePage from './Pages/HomePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app'>
      <Login/>
      {/* <HomePage/> */}
    </div>
  )
}

export default App
