
// import logo from './logo.svg';
import './App.scss';

import BUTTON from './components/button-1/BUTTON';
import BUTTON2 from './components/button-2/BUTTON2';
import BUTTON3 from './components/button-3/BUTTON3';



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
        <BUTTON textBtn="delete" />
      </header> */}

      <BUTTON/>

      <BUTTON2/>

      <BUTTON3/>

      





    </div>
  );
}

export default App;
