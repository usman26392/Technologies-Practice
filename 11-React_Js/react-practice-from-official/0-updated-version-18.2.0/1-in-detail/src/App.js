// import logo from './logo.svg';
import './App.css';
import Gallery from './components/Gallery';
import PackingList from './components/PackingList';
import ScienstistList from './components/ScienstistList';
import Teaset from './components/Teaset';
import Todolist from './components/Todolist';
import Toolbar from './components/Toolbar';
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
      <hr />
      <hr />
      <Teaset/>

      <hr />
      <hr />
      <Toolbar
        onPlayMovie={()=> {alert('playing')}}
        onUploadImage={()=>{alert('Uploading')}}
       />


    </div>
  );
}

export default App;
