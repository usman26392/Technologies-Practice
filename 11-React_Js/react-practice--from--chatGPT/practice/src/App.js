import { useState } from "react";

// import logo from './logo.svg';
import "./App.css";
import Greeting from "./components/Greeting";
import Profile from "./components/Profile";
import Book from "./components/Book";
import Button from "./components/Button";
import ProfileLogin from "./components/ProfileLogin";
import TodoList from "./components/TodoList";
import PersonList from "./components/PersonList";
import TodoList2 from "./components/TodoList2";
import TodoList3 from "./components/TodoList3";
import Counter from "./components/state-examples/Counter";
import LoginForm from "./components/state-examples/LoginForm";
import AddCart1 from "./components/lifting-state-up-example/Button";
import AddCart2 from "./components/lifting-state-up-example/Button2";
import BtnforEvent from "./components/event-handling/Button";
import LoginFormHandling from "./components/form-handling/LoginForm";
import Form from "./components/controlled-and-uncontrolled/Form";
import Form2 from "./components/controlled-and-uncontrolled/Form2";
import UserDataDisplay from "./components/lifecycle-methods/UserDataDisplay";
import Modal from "./components/portals/Modal";




function App() {
  // State is managed in the parent component
  const [count, setCount] = useState(0);
  function handleProductCount() {
    setCount((c)=> {
      return (c + 1 )
    })
  }

  //  for method pass as props
  const handleClick = function () {
    console.log("button click");
    document.querySelector("h1").style.color = "red"
  };

  //  for conditional rendering
  const userIsLoggdedIn = true;

  // for portal
  const [isModalOpen, setIsModalOpen] = useState(false);

  function openModal() {
    setIsModalOpen(true)
  }

  function closeModal() {
    setIsModalOpen(false)
  }
  // end of portal



  return (
    <div className="App">
      {/* usage of the functional component */}
      <Greeting name="Muhammad Usman" message="Welcome to React!" />
      <Greeting name="Muhammad Rehan" message="Welcome to Wordpress!" />
      <Profile />
      <Book title="React for Beginners" author="Muhammad Usman" />
      <Button clickEvent={handleClick} />
      <ProfileLogin isLoggedIn = {userIsLoggdedIn} />
      <TodoList/>
      <PersonList/>
      <TodoList2/>
      <TodoList3/>
      <Counter/>
      <LoginForm/>
      <h2>Lifting state up</h2>
      {/* Child component receives state and callback function from here */}
      <p>Product Count from Parent: {count}</p>
      <AddCart1 countValue={count} handleProduct={handleProductCount}  />
      <AddCart2 countValue={count} handleProduct={handleProductCount}  />

      <h2>event handling</h2>
      <BtnforEvent/>

      <h2>Form Handling</h2>
      <LoginFormHandling/>

      <h2>controlled component</h2>
      <Form/>
      <br />
      <h2>uncontrolled component</h2>
      <Form2/>

      <h2>life cycle methods with hook: useEffect</h2>
      <UserDataDisplay/>

      <h2>Portal Example</h2>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2>This is a modal</h2>
        <p>Content inside the modal</p>
        <button onClick={closeModal}>close Modal</button>
      </Modal>
      <button onClick={openModal}>open Modal</button>


    </div>
  );
}

export default App;
