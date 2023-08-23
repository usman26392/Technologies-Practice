// import logo from './logo.svg';
import './App.css';
import ChatApp from './components/ChatApp';
import Gallery from './components/Gallery';
import PackingList from './components/PackingList';
import ScienstistList from './components/ScienstistList';
import SculptureGallery from './components/SculptureGallery';
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

       <br />
       <br />
       <SculptureGallery/>

       <br />
       <br />
       <ChatApp/>


    </div>
  );
}

export default App;
