
// import logo from './logo.svg';
import { BrowserRouter,  Routes, Route } from 'react-router-dom';
import './App.css';
import HomeUI from './components/Home';
import View from './components/students/View';
import Edit from './components/students/Edit';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<HomeUI/>} />
        <Route exact path='/view/:id' element={<View/>} />
        <Route exact path='/edit/:id' element={<Edit/>} />
      </Routes>
    </BrowserRouter>
    </>
     
    //  or
    // <div className="App p-3">
    // <HomeUI/>
    // </div>

  );
}

export default App;
