
// import logo from './logo.svg';
import './App.css';
import Toolbar from './components/Toolbar';
import SculptureGallery from './components/SculptureGallery';
import Chat from './components/chat/Chat';
import Button from './RespondingToEvents/Responding';

function App() {
  return (
    <div className="App">

      {/* way-1 */}
      {/* <Toolbar/> */}

      {/* way-2 or way-3 */}
      <Toolbar 
        playMovie={()=> {alert('playing movie! abc')}}
        uploadImg={()=> {alert('uploading image!')}}
      />

      <SculptureGallery/>
      <Chat/>

      {/* responding to events topics from here */}
      <Button/>


    </div>
  );
}

export default App;
