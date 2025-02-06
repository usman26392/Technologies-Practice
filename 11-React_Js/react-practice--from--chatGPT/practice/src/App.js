

import React, { createContext, Suspense, useState } from "react";


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
import UserInfo from "./components/ReactHooks/useContextHook/UserInfo";
import ProductList from "./components/ReactHooks/useMemoHook/product-list";
import ParentComp from "./components/ReactHooks/useCallbackHook/ParentComp";
import NumberCounter from "./components/ReactHooks/useReducerHook/NumberCounter";
import InputElement from "./components/ReactHooks/useRefHook/InputElement";
import PreviousCount from "./components/ReactHooks/useRefHook/PreviousCount";
import WindowWidthComponent from "./components/ReactHooks/useCustomHook/WindowWidthComponent";
import DataFetchingComponent from "./components/ReactHooks/useCustomHook2/DataFetchingComponent";
import CustomTooltip from "./components/portals/custom-tooltip";
import Loading from "./react-built-in-components/suspense/Loading";

// Lazy load the component
const LazyComponent =  React.lazy(()=> import("./react-built-in-components/suspense/LazyComponent"));




// example: share user authentication state across different child components.
// 1. Create a UserContext
// which can store global data/state.
// This context will hold the user’s authentication state (logged in or logged out).
export const UserContext = createContext();


// main App component
function App() {
  const [showTooltip, setShowTooltip] = useState(false);

  console.log('App parent Component rendered!');

  // State is managed in the parent component
  const [count, setCount] = useState(0);
  function handleProductCount() {
    setCount((c) => {
      return c + 1;
    });
  }

  //  for method pass as props
  const handleClick = function () {
    console.log("button click");
    document.querySelector("h1").style.color = "red";
  };

  //  for conditional rendering
  const userIsLoggdedIn = true;

  // for portal
  const [isModalOpen, setIsModalOpen] = useState(false);

  function openModal() {
    setIsModalOpen(true);
  }
  function closeModal() {
    setIsModalOpen(false);
  }
  // end of portal

  // for useContext():
  const [user, setUser] = useState(null); // null means user is logged out
  // Function to log in or log out
  const toogleLogin = () => {
    if (user) {
      setUser(null);
    } else {
      setUser({
        name: "Muhammad Usman",
      }); // log in
    }
  };
  // end

  return (

    <div className="App">

      {/* usage of the functional component */}
      <Greeting name="Muhammad Usman" message="Welcome to React!" />
      <Greeting name="Muhammad Rehan" message="Welcome to Wordpress!" />
      <Profile />
      <Book title="React for Beginners" author="Muhammad Usman" />
      <Button clickEvent={handleClick} />
      <ProfileLogin isLoggedIn={userIsLoggdedIn} />
      <TodoList />
      <PersonList />
      <TodoList2 />
      <TodoList3 />
      <Counter />
      <LoginForm />
      <h2>Lifting state up</h2>
      {/* Child component receives state and callback function from here */}

      <p>Product Count from Parent: {count}</p>
      <AddCart1 countValue={count} handleProduct={handleProductCount} />
      <AddCart2 countValue={count} handleProduct={handleProductCount} />

      <h2>event handling</h2>
      <BtnforEvent />

      <h2>Form Handling</h2>
      <LoginFormHandling />

      <h2>controlled component</h2>
      <Form />
      <br />
      <h2>uncontrolled component</h2>
      <Form2 />

      <h2>life cycle methods with hook: useEffect</h2>
      {/* <UserDataDisplay /> */}

      

      <h1>useContext() hook example - Auth</h1>
      {/* 2. Provide the user state and toggleLogin function to child components */}
      {/* pass the data in the child components with the help of Provider */}
      {/* The provider will pass down the user state and a function to toggle the login status. */}

      <UserContext.Provider value={{ user, toogleLogin }}>
        <button onClick={toogleLogin}>{user ? "log out" : "log in"}</button>
        {/* Rendering the child component */}
        <UserInfo />
      </UserContext.Provider>

      <h1>useCallback hook example</h1>
      {/* <ParentComp /> */}

      <h1>useMemo hook example</h1>
      {/* <ProductList/> */}

      <h1>useReducer hook example</h1>
      <NumberCounter/>

      {/* <h1>useRef hook example </h1> */}
      {/* <InputElement /> */}
      {/* <PreviousCount /> */}

      {/* <h1>use Custom hook </h1> */}
      {/* <WindowWidthComponent/> */}
      {/* <DataFetchingComponent/> */}


      {/* <h2>Portal Example</h2> */}
      {/* <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2>This is a modal</h2>
        <p>Content inside the modal</p>
        <button onClick={closeModal}>close Modal</button>
      </Modal>
      <button onClick={openModal}>open Modal</button> */}



      {/* <h2>Portal Example 2</h2> */}
      {/* <div>
        <button
          onMouseEnter={()=> (setShowTooltip(true))}
          onMouseLeave={()=> ( setShowTooltip(false))}
          style={{
            position: "relative"
          }}
        >Hover over me!</button>
        {
          showTooltip && (
            <CustomTooltip>
              <div style={tooltipStyles}>This is a tooltip!</div>
            </CustomTooltip>
          )
        }

      </div> */}

      <h2>React suspense Example</h2>


      <Suspense fallback={<Loading/>}>
          <LazyComponent/>
      </Suspense>






    </div>
  );

  
}

export default App;







const tooltipStyles = {
  padding: "10px",
  backgroundColor: "black",
  color: "white",
  borderRadius: "5px",
  position: "fixed",
  top: "20px",
  left: "0px",
};