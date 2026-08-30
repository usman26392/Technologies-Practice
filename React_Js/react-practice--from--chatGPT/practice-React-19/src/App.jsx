import { useState } from 'react'
import './App.css'
import LoginForm from './login-form/login-form'
import NewsLetterForm from './built-in-hooks/useActionState/news-letter-form'
import ShoppingList from './built-in-hooks/useActionState/shopping-list'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <LoginForm/>
      <br />
      <br />
      {/* <NewsLetterForm/> */}
      <br style={{margin: "40px"}} />
      
      {/* <ShoppingList/> */}
    </>
  )
}

export default App
