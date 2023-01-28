
// import logo from './logo.svg';
import './App.css';
import Toolbar from './components/Toolbar';
import SculptureGallery from './components/SculptureGallery';
import Chat from './components/chat/Chat';
// import Button from './RespondingToEvents/Responding';
// import Toolbar2 from "./RespondingToEvents/Responding";
// import Toolbar3 from './RespondingToEvents/Responding';
import Toolba4 from './RespondingToEvents/Responding';
// import { SnapShot } from './snapshot/SnapShot';
// import Form from './snapshot/SnapShot';
// import TrafficLight from './snapshot/SnapShot';
import { MovingDot, EmailForm } from './updating/Objects';



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
      {/* <Button/> */}
      {/* <Toolbar2/> */}
      <hr />
      {/* <Toolbar3/> */}
      <hr />
      <Toolba4/>
      {/* <SnapShot/> */}
      <h1>State over time!</h1>
      {/* <Form/> */}
      {/* <TrafficLight/> */}
      <h1>Updaing Objects</h1>
      <MovingDot/>
      <EmailForm/>

    </div>
  );
}

export default App;
