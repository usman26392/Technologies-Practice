import { useState } from "react"

import logo from "./logo.svg";
import "./App.css";
import Profile from "./User";
import { Dashboard } from "./components/Dashboard";
import ShoppingList from "./components/ShoppingList";
import Button4 from "./components/Button4";
import Button5 from "./Button5";





function MyButton() {
  return <button>Explore more</button>;
}

function MyButton2() {
  return (
    <button
      onClick={() => {
        alert("you clicked button");
      }}
    >
      Explore more
    </button>
  );
}

// or
function MyButton3() {
  function handleClick() {
    alert('you clicked me!')
  }

  return (
    <button onClick={handleClick} >
      Explore more
    </button>
  );
}



function App() {
  const [count2, setCount2] = useState(0);

  function incrementNumber2() {
      setCount2(count2 + 1)
  }



  return (
    <div className="App">
      <h1 className="main-title">Welcome to my App</h1>
      <MyButton />
      <br />
      <br />
      <Profile />
      <br />
      <br />
      <Dashboard />
      <br />
      <br />
      <ShoppingList />
      <MyButton2/>
      <br />
      <br />
      <MyButton3/>
      <br />
      <br />
      <h2>state in button component, update separately </h2>
      <Button4/>
      <Button4/>
      <Button4/>
      <h2>Now state in parent component, update together </h2>
      <Button5 count={count2}  click={incrementNumber2}  />
      <Button5 count={count2}  click={incrementNumber2}  />
      <Button5 count={count2}  click={incrementNumber2}  />
      



    </div>
  );
}

export default App;
