import './App.css'
import { Route, Routes } from 'react-router'
import CreatePost from './pages/create-post'
import Posts from './pages/posts'




function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path='/' element={<CreatePost />} />
          <Route path='/posts' element={<Posts />} />
        </Routes>
      </div>

    </>
  )
}

export default App
