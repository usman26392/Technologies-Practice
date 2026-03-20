// snippet:  rafce

// from small components
// import Article from "./components/article/Article";
import Brand from "./components/brand/Brand";
import CTA from "./components/cta/CTA";
import Feature from "./components/feature/Feature";
import NavBar from "./components/navbar/NavBar";

// from large components
import Blog from "./large-components/blog/Blog";
import Footer from "./large-components/footer/Footer";
import Header from "./large-components/header/Header";
import MainFeatures from "./large-components/main-features/MainFeatures";
import Posibility from "./large-components/posibility/Posibility";
import WhatGPT from "./large-components/what-gpt3/WhatGPT";

import './App.css';



// root component
const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <NavBar/>
        <Header/>
      </div>
      <Brand/>
      <WhatGPT/>
      <MainFeatures/>
      {/* <Feature/> */}
      <Posibility/>
      <CTA/>
      <Blog/>
      <Footer/>
    </div>
  )
}

export default App
