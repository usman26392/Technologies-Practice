// import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
// import { Greet } from './components/Greet';
import Greet from './components/Greet';
import Message from './components/Message';
import { Parent } from './components/Parent';
import PostFormList from './components/PostFormList';
import PostList from './components/PostList';
import SearchForm from './components/SearchForm';
import UserGreeting from './components/UserGreeting';
import UserList from './components/UserList';


function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      {/* below: props are going to child component */}
      {/* <Greet personName="usman" />
      <Greet personName="rehan" age="24" />
      <Greet>
        <p>This is a children props of this component! </p>
      </Greet> */}

      {/* <Message/> */}

      {/* <Parent/>

      <UserGreeting/>

      <UserList/> */}

      {/* <Form/> */}

      {/* <PostList/> */}

      {/* <PostFormList/> */}

      <SearchForm/>


    </div>
  );
}

export default App;
