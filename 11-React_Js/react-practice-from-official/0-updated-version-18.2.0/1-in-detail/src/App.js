// import logo from './logo.svg';
import './App.css';
import Gallery from './components/Gallery';
import PackingList from './components/PackingList';
import ScienstistList from './components/ScienstistList';
import Todolist from './components/Todolist';
import WomanProfile from './components/WomanProfile';



function App() {
  return (
    <div className="App">
      <Gallery/>
      <hr />
      <hr />
      <Todolist/>
      <hr />
      <hr />
      <WomanProfile/>
      <hr />
      <hr />
      <PackingList/>
      <hr />
      <hr />
      <ScienstistList/>
    </div>
  );
}

export default App;
