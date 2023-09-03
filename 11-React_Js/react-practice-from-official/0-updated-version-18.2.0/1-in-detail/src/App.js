// import logo from './logo.svg';
import './App.css';
import ChatApp from './components/ChatApp';
import Countries from './components/Countries';
import Gallery from './components/Gallery';
import PackingList from './components/PackingList';
import PersonForm from './components/PersonForm';
import ScienstistList from './components/ScienstistList';
import ScoreCounter from './components/ScoreCounter';
import SculptureGallery from './components/SculptureGallery';
import Teaset from './components/Teaset';
import Todolist from './components/Todolist';
import Toolbar from './components/Toolbar';
import WomanProfile from './components/WomanProfile';
import CityQuiz from './components/managing-state-concepts/CityQuiz';
import FirstLastName from './components/managing-state-concepts/FirstLastName';




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

       <br />
       <br />
       <ScoreCounter/>

       <br />
       <br />
       <PersonForm/>

       <br />
       <br />
       <Countries/>

       <br />
       <br />
       <h2>Managing state concepts intermediate</h2>
       <CityQuiz/>

       <br />
       <br />
       <FirstLastName/>


    </div>
  );
}

export default App;
