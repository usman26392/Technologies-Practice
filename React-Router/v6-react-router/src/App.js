
// import logo from './logo.svg';
// import './App.css';
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/main/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Blog from "./components/pages/Blog";
import For0four from "./components/pages/404";
import Post1 from "./components/posts/post-1";
import Dashboard from "./components/pages/Dashboard";
import Login from "./components/pages/Login";
import Logout from "./components/pages/Logout";

function App() {
  let isUserLogin = true;

  let userData = {
    "message": "User is not login"
  }


  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="bl" element={<Blog />} />
        <Route path="*" element={<For0four />} />
        {/* <Route path="post" element={<Post1/> } /> */}
        {/* <Route path="post/:category" element={<Post1/> } /> */}
        {/* <Route path="post/:category/:id" element={<Post1/> } /> */}
        <Route path="post/:id" element={<Post1/> } />
        <Route path="login" element={<Login/>} />
        <Route path="dashboard" element={ 
            isUserLogin ? <Dashboard /> : <Navigate to="/login" replace state={userData} /> 
          } />
        <Route path="logout" element={ <Logout/> } />

      </Routes>
    </div>
  );
}

export default App;
