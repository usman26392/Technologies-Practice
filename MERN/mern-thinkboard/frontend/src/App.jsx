import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomePage from './pages/HomePage'
import { Route, Routes } from 'react-router'
import NoteCreatePage from './pages/NoteCreatePage'
import NoteDetailPage from './pages/NoteDetailPage'

function App() {

  return (
    <>
      <div className='relative h-full w-full'>
        <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_60%,#00FF9D40_100%)]" />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/create' element={<NoteCreatePage />} />
          <Route path='/detail/:id' element={<NoteDetailPage />} />

        </Routes>
      </div>

    </>
  )
}

export default App
