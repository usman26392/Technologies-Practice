import { useState } from 'react'
import './App.css'
import LoginForm from './login-form/login-form'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <LoginForm/>
    </>
  )
}

export default App
