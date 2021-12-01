// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


//  my code is here
// import React, {Component, Fragment} from "react";
// import Box from "./Student";

//------------------  React element -------------------
// let elm = <h1>Hello GeekyShows</h1>
// export default elm;


// --------------------- class base a component ----------------------
// class App extends Component {
//   render() {
//     return (
//       <div>
//         <h1>Hello World!</h1>
//         <p>This is a paragraph</p>
//         <button>Button</button>
//       </div>
//     );
//   }
// }

// export default App;

// ------------------- React Fragment ------------------------
// class App extends Component {
//   render() {
//     return (
//       // <React.Fragment>
//       //   <h1>Hello World!</h1>
//       //   <p>This is a paragraph</p>
//       //   <button>Button</button>
//       // </React.Fragment>

//       // OR

//       // <Fragment>
//       //   <h1>Hello World!!</h1>
//       //   <p>This is a paragraph!</p>
//       //   <button>Button</button>
//       // </Fragment>

//       // OR
//       <>
//         <h1>Hello World</h1>
//         <p>This is a paragraph!</p>
//         <button>Button</button>
//       </>
//     );
//   }
// }

// export default App;




// Testimonnials component 
// import { Component } from "react";
// import Box from "./Box";
// import "./App.css";
// import PropTypes from "prop-types";

// class TestimonialsSec extends Component {
//   render() {
//     return (
//       <div className="testimonial-row">
//         <Box name={123}/>
//         <Box name="Usman"/>
//         <Box name="Fahad"/>
//       </div>
//     );
//   }
// }

// TestimonialsSec.propTypes = {
//   name: PropTypes.string
// };



// export default TestimonialsSec;




// ------------------------- State without constructor -----------------------
import React, {Component} from "react";

class Student extends Component {
  state = {
    name: "usman",
    roll: this.props.roll
  };
  render() {
    return (
      <h1>Hello {this.state.name}, your roll number is {this.state.roll}</h1>
    )
  }

}

export default Student;




