// import logo from './logo.svg';
// import './App.css';



// App is a parent / root component of this application.
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>Edit <code>src/App.js</code> and save to reload.</p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer">Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// or
// const App = ()=> {
//   let firstName = 'Muhammad Usman',
//       isShowingName = true;
//   return (
//     <div className="App">
//       {/* <h1>Hello {isShowingName ? firstName : 'please check you name'} </h1> */}
//       {isShowingName ? (
//         <> <h1>{firstName}</h1> </>
//         ) : (
//         <>
//           <h1>no</h1>
//           <h2>no</h2>
//         </>
//       )}
//     </div>
//   )
// }


// --------------------------**************----------------
// // a child component
// const Person = (props)=> {
//   return (
//       <div className="Person-box">
//         <h1>firtName: {props.firstname} </h1>
//         <h2>LastName: {props.lastname}</h2>
//         <h2>Age: {props.age} </h2>
//       </div>
//   )
// }

// // a parent Component
// const App = ()=> {
//   return (
//     // callers of Person Component
//     <div className="App">
//       <Person firstname='Muhammad' lastname='Usman' age='30'/>
//       <Person firstname='Muhammad' lastname='Rehan' age='22'/>
//       <Person firstname='Muhammad' lastname='Farhan' age='33'/>
//     </div>
//   )
// }

// ------------------------**************-------------------
// state
import { useState, useEffect } from "react";

const App = ()=> {
  const [counter, setCounter] = useState(0);

  useEffect(()=> {
    alert('from use effect!')
  },[]);

  return (
    <div className="App">
      <button onClick={()=> {
        setCounter((prevCountValue)=> 
          prevCountValue -1
        )
      }}>-</button>
      <h1>{counter}</h1>
      <button onClick={()=> {
        setCounter((prevCountValue)=> prevCountValue + 1 )
      }}>+</button>
    </div>
  )
}






export default App;
