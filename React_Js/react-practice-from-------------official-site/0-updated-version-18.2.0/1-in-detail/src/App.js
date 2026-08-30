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
import Accordion from './components/managing-state-concepts/Accordion';
import ChatMessenger from './components/managing-state-concepts/ChatMessenger';
import CityQuiz from './components/managing-state-concepts/CityQuiz';
import FirstLastName from './components/managing-state-concepts/FirstLastName';
import CounterContextApp from './components/managing-state-concepts/context-concept/Counter';
import CounterApp from './components/managing-state-concepts/reducer-concept/CounterApp';
import InputField from './components/managing-state-concepts/refs/InputField';




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

       <br />
       <br />
       <Accordion/>

       <br />
       <br />
       <ChatMessenger/>

       <hr />
       <hr />
       <CounterApp/>

       <hr />
       <hr />
       <h1>counter with  context </h1>
       <CounterContextApp/>

       <hr />
       <hr />
       <InputField/>
    </div>

    
  );
}

export default App;
