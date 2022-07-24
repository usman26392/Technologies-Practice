
// import logo from './logo.svg';
// import './App.css';
import { Routes, Route } from "react-router-dom";
import Layout from "./components/main/Layout";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Blog from "./components/pages/Blog";
import For0four from "./components/pages/404";
import Post from "./components/posts/Post";
import Postdetail from "./components/posts/Postdetail";
import PostLayout from "./components/posts/PostLayout";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Layout/> }> 
          {/* nested Route */}
          <Route index element={ <Home/> } />
          <Route path="about" element={ <About/> } />
          <Route path="bl" element={ <Blog/> } />
          <Route path="posts" element={ <PostLayout/> } >
            <Route index element={<Post/> } />  
            <Route path=":category" element={<Postdetail/> } />  
          </Route>
          <Route path="*" element={ <For0four/> } />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
