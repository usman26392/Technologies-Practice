import React, { createContext, Suspense, useCallback, useMemo, useState } from "react";

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
// import UserDataDisplay from "./components/lifecycle-methods/UserDataDisplay";
import CustomTooltip from "./components/portals/custom-tooltip";
import Loading from "./react-built-in-components/suspense/Loading";
import UserProfile from "./updating-objects-in-state/user-profile";
import Cart from "./updating-objects-in-state/cart";
import TodoApp from "./updating-arrays-in-state/todo";
import LiveValidationForm from "./components/form-handling/validation-form";
import CounterLifeCycle from "./components/lifecycle-methods/counter";
import NumberCounter from "./react-hooks/useReducerHook/NumberCounter";
import UserInfo from "./react-hooks/useContextHook/UserInfo";
import Counter2 from "./react-hooks/useStateHook/use-state-hook";
import PasswordToggle from "./react-hooks/useStateHook/password-toggle";
// import UserData from "./react-hooks/useEffectHook/user-data";
import Counter3 from "./react-hooks/useEffectHook/counter";
import Timer from "./react-hooks/useEffectHook/timer";
import ResizeTracker from "./react-hooks/useEffectHook/resize-tracker";
import ProductList from "./react-hooks/useMemoHook/product-list";
import SquaredCounter from "./react-hooks/useMemoHook/squared-counter";
import ParentComp from "./react-hooks/useCallbackHook/ParentComp";
import ChangeBackground from "./react-hooks/useLayoutEffectHook/change-background";
import ProductDisplay from "./react-built-in-components/Profiler/product-display";
import ModalButton from "./components/portals/modal-button";
import UserProfileDemo from "./components/state-and-props-demo/user-profile";
import SimpleSearch from "./react-hooks/useMemoHook/simple-search";
import ProductGallery from "./react-hooks/useCallbackHook/demo-1/product-gallery";
import Header from "./react-hooks/useContextHook/header/header";
import SoapListing from "./react-hooks/useContextHook/soaps/soap-listing";
import CartProvider from "./providers/cart-provider";
import PerfumeListing from "./react-hooks/useContextHook/perfumes/perfume-listing";
// Lazy load the component
const LazyComponent = React.lazy(
  () => import("./react-built-in-components/suspense/LazyComponent"),
);

// example: share user authentication state across different child components.
// 1. Create a UserContext
// which can store global data/state.
// This context will hold the user’s authentication state (logged in or logged out).
export const UserContainerContext = createContext();

// main App component
function App() {  
  console.log("App parent Component rendered!");
  const [showTooltip, setShowTooltip] = useState(false);
  
  const [check, setCheck] = useState(false);


  // State is managed in the parent component
  const [count, setCount] = useState(0);

  function handleProductCount() {
    setCount((c) => {
      return c + 1;
    });
  }

  //  for method pass as props
  const handleClick = function () {
    console.log("Parent component's handler ran");
    setCheck((prev) => !prev);
  };

  //  for conditional rendering

  const userIsLoggdedIn = true;

  // for portal

  // end of portal

  // Topic:  - useContext()
  const [user, setUser] = useState(""); // null means user is logged out
  // Function to log in or log out
  const toogleLogin = () => {
    if (user) {
      setUser("");
    } else {
      setUser({
        name: "Muhammad Usman",
      });
    }
  };



  

  return (
    <div className="App">
      

      {/* usage of the functional component */}

      {/* <Greeting name="Muhammad Usman" message="Welcome to React!" /> */}
      <Greeting name="Muhammad Rehan" message="Welcome to Wordpress!" />

      <Profile />
      <Book title="React for Beginners" author="Muhammad Usman" />

      <Button clickEvent={handleClick} />

      <ProfileLogin isLoggedIn={userIsLoggdedIn} />

      <h2>list rendering</h2>
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

      <h2>updating objects in state</h2>
      <UserProfile />
      <Cart />
      <h2>updating arrays in state</h2>
      <TodoApp />

      <h2>Form Handling</h2>
      <LoginFormHandling />

      <h2>Live validation form</h2>
      <LiveValidationForm />

      <h2>controlled component</h2>
      <Form />
      <br />

      <h2>uncontrolled component</h2>
      {/* <Form2 /> */}

      <h2>life cycle methods with hook: useEffect</h2>
      {/* <UserDataDisplay /> */}
      {/* <CounterLifeCycle/> */}

      <h2>React hooks</h2>
      <Counter2 />
      <PasswordToggle />

      {/* <UserData /> */}
      {/* <Counter3/> */}
      {/* <Timer/> */}
      {/* <ResizeTracker/> */}

      <h1>useContext() hook example</h1>
      {/* 2. Provide the user state and toggleLogin function to child components */}
      {/* pass the data in the child components with the help of Provider */}
      {/* The provider will pass down the user state and a function to toggle the login status. */}
      <h2>{user.name}</h2>
      <UserContainerContext.Provider value={{ user, toogleLogin }}>
        <UserInfo />
      </UserContainerContext.Provider>

      

        {/* <Header/>
        <SoapListing/>
        <PerfumeListing/> */}




      <h1>useCallback hook example</h1>
      {/* <ParentComp/> */}
      {/* <ProductGallery /> */}

      <h1>useMemo hook example</h1>
      {/* <SquaredCounter /> */}
      {/* <ProductList/> */}
      {/* <SimpleSearch /> */}

      <h1>useReducer hook example</h1>
      <NumberCounter />

      {/* <h1>useRef hook example </h1> */}
      {/* <InputElement /> */}
      {/* <PreviousCount /> */}

      <h1>useLayoutEffect hook example </h1>
      {/* <ChangeBackground /> */}

      {/* <h1>use Custom hook </h1> */}
      {/* <WindowWidthComponent/> */}
      {/* <DataFetchingComponent/> */}

      <h2>Portal Example</h2>
      {/* <ModalButton /> */}

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
      <Suspense fallback={<Loading />}>
        <LazyComponent />
      </Suspense>

      <h2>Profiler Example</h2>
      {/* <div className="border">
        <ProductDisplay />
      </div> */}

      <h2>State and Props Example</h2>
      <UserProfileDemo name="Ali Khan" age={25} city="Karachi" />
      
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
