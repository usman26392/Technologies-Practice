
import logo from './logo.svg';
import './App.scss';

import BUTTON from './components/button-1/BUTTON';
import BUTTON2 from './components/button-2/BUTTON2';
import BUTTON3 from './components/button-3/BUTTON3';
import Check from './components/user/check';
import LIST from './components/list/LIST';
import BUTTON_4 from './components/button-4/BUTTON_4';
import Blog from './components/blog/Blog';
import News from './components/News/News';
import Form from './components/forms/Form';


function App() {
  const isRegister = false;

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
      
      {/* conditional rendering with ternary operator
        inside the return, jsx may hum ternary operator use karsakhtay hayn.
        jsx may hum IIFE b use karsakhtay hayn */}

      {/* example-1: conditional rendering */}
      {
        // isRegister ? <USER/> : <GUEST/>
      }      

      <Check/>

      <LIST/>

      <BUTTON_4/>

      <Blog/>
      <News/>

      <Form/>

      



    </div>
  );
}

export default App;


// example-2 with conditional rendering:
// function App() {
//   const isRegister = false;
//   if(isRegister) {
//     return (
//       <div className="App">
//         <USER/>   
//       </div>
//     );
//   }
//   else {
//     return (
//       <div className="App">
//         <GUEST/>   
//       </div>
//     );
//   }
// }

// export default App;
