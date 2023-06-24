import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Message from './components/Message';
import Person from './components/Person';
import PersonList from './components/PersonList';
import Status from './components/advanceProps/Status';
import Heading from './components/advanceProps/Heading';
import Award from './components/advanceProps/Award';
import Message2 from './components/advanceProps/Message2';
import Button from './components/eventProps/Button';
import InputField from './components/eventProps/InputValue';
import Titles from './components/styleProps/Title';

function App() {
  
  // object
  const personName = {
    fname: "Muhammad",
    lname: "Usman"
  }
  
  // array
  const personLists = [
    {
      fname: "Muhammad",
      lname: "usman"
    },
    {
      fname: "Muhammad",
      lname: "rehan"
    },
  ] 


  return (
    <div className="App">
      <Message name="usman nawaz ali" messageCount={100} isLoggin={false}  />
      <Person name={personName}  />
      <PersonList names={personLists}  />
      
      <h1>---------------------- Advanve props --------------------- </h1>
      <Status status='error' />
      <Heading>This is a title heading !</Heading>

      <Award>
        <Heading>the oscar goes to leonardo dicaprio</Heading>
      </Award>
      <Message2 name="usman nawaz ali" isLoggin={true} />

      <h2>---------------------- event props ------------------------ </h2>
      <Button click={()=> console.log("button clicked")} />
      <InputField fieldValue= ""  changeValue={()=> console.log("change") }    />

      <h2>----------------------- style props ----------------------- </h2>
      <Titles styles= {{border:"1px solid black", padding: "1rem"}} />
      

    </div>
  );
}

export default App;
