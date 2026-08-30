import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Counter from './features/counter/counter'
import PostsList from './features/posts/post-list'
import PlaceholderList from './features/placeholder-posts/placeholder-list'

function App() {

  return (
    <>
      <section id="center">
        <Counter/>

        <hr />
        <hr />
        <h2>RTK query example</h2>
        {/* <PostsList /> */}
        <PlaceholderList/>
      </section>


      
    </>
  )
}

export default App
