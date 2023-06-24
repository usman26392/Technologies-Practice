// import logo from './logo.svg';
import React, { useReducer } from 'react';
import './App.css';
import Counter5 from './components/hooks/Counter5';
import Component1 from './components/hooks/Component1';
import Component2 from './components/hooks/Component2';
import Component3 from './components/hooks/Component3';
import DataFetchingOne from './components/hooks/DataFetchingOne';
import DataFetchingTwo from './components/hooks/DataFetchingTwo';
import ParentComponent from './components/hooks/callbackhook/ParentComponent';
import Counter from './components/hooks/usememohook/Counter';
import InputComponent from './components/hooks/useref/InputComponent';
import Timer from './components/hooks/useref/Timer';
import DocumentTitle from './components/hooks/customhook/DocumentTitle';
import DocumentTitle2 from './components/hooks/customhook/DocumentTitle2';
import CounterOne from './components/hooks/customhook/CounterOne';
import CounterTwo from './components/hooks/customhook/CounterTwo';
// import ComponentC from './components/hooks/ComponentC';
// import Fruits from './components/hooks/Fruits';
// import Mouse from './components/hooks/Mouse';
// import MouseContainer from './components/hooks/MouseContainer';
// import PageTitle from './components/hooks/PageTitle';
// import PostList from './components/hooks/PostList';
// import PostList2 from './components/hooks/PostList2';
// import Counter3 from './components/hooks/Counter3';
// import Counter4 from './components/hooks/Counter4';
// import Counter from './components/Counter';
// import Form from './components/Form';
// import Form2 from './components/Form2';
// import { Greet } from './components/Greet';
// import PortalDemo from './components/PortalDemo';
// import UserGreeting from './components/UserGreeting';
// import UserList from './components/UserList';
// import Foji1 from "./components/hoc/Foji1"
// import Foji2 from './components/hoc/Foji2';
// import Counter2 from './components/hooks/Counter2';
// import Form3 from './components/hooks/Form3';






export const UserContext = React.createContext();
export const UserChannelContext = React.createContext();


// example: useReducer with useContext
export const CountContext = React.createContext(); 
const initialState = 0;
const reducer = (state, action)=> {
        console.log(state)
        console.log(action)
        switch (action) {
          case "increment":
            return state + 1;
          case "decrement":
            return state - 1;
          case "reset":
            return initialState;
          default:
            return state
        }
}



function App() {
  const [newCount, dispatch] = useReducer(reducer , initialState);

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Edit <code>src/App.js</code> and save to reload.</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
  
      {/* <Greet /> */}
      {/* <Counter/> */}
      {/* <UserGreeting/> */}
      {/* <UserList/> */}
      {/* <Form/> */}
      {/* <Form2/> */}
      {/* <PortalDemo/> */}
      {/* <Foji1/>
      <Foji2/> */}
      {/* <Counter2/> */}
      {/* <Form3/> */}
      {/* <Fruits/> */}
      {/* <PageTitle/> */}
      {/* <Mouse/> */}
      {/* <MouseContainer/> */}
      {/* <PostList/> */}
      {/* <PostList2/> */}

      {/* <UserContext.Provider value={"usman"}>
        <UserChannelContext.Provider value={"codi Ninja"} >
          <ComponentC/>
        </UserChannelContext.Provider>
      </UserContext.Provider> */}

      {/* <Counter3/> */}
      {/* <Counter4/> */}
      {/* <Counter5/> */}

      {/* useReducer with useContext */}
      {/* <h1>Global state management! </h1>
      <h2>from root component: {newCount } </h2>
      <CountContext.Provider value={ {countSate: newCount, countDisp: dispatch} }  >
        <Component1/>
        <Component2/>
        <Component3/>
      </CountContext.Provider> */}

      {/* data fetching  */}
      {/* <DataFetchingOne/> */}
      {/* <DataFetchingTwo/> */}

      {/* for callback hook */}
      {/* <ParentComponent/> */}

      {/* useMemo  */}
      {/* <Counter/> */}

      {/* for useRef */}
      {/* <InputComponent/> */}
      {/* <Timer/> */}

      {/* for custom hook */}
      {/* <DocumentTitle/>
      <DocumentTitle2/> */}
      {/* second example */}
      <CounterOne/>
      <br/>
      <CounterTwo/>





    </div>
  );
}

export default App;
