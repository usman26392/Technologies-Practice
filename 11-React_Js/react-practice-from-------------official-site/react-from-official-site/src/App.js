

// import logo from './logo.svg';
import './App.css';
import './Button.css';
import { useState } from 'react';



const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};

function MyButton() {
  return (
    <button className='btn'>I'm a button</button>
  )
}


function AdminPanel() {
  return (
    <>
      <h1>admin panel</h1>
    </>    
  )
}

function LoginForm() {
  return (
    <>
      <h1>Login form</h1>
    </>
  )
}


// array of products
const products = [
  { title: 'Cabbage', isFruit: false, id: 1 },
  { title: 'Apple', isFruit: true, id: 2 },
  { title: 'Garlic', isFruit: false, id: 3 },
  { title: 'Mango', isFruit: true, id: 4 },
  { title: 'PineApple', isFruit: true, id: 5 },
  { title: 'Onion', isFruit: false, id: 6 },
];


function SpecialButton() {
  return(
    <button onClick={()=> {alert('you click me')}} >click me</button>
  )
}


function SpecialButton2() {
  function showMessage() {
    alert('you click me !!!!!!!!!!!')
  }

  return(
    <button onClick={showMessage}>click me</button>
  )

}



// updating the screen. topic state
function SpecialButton3({cont, click}) {
  return (
    <button
      className='btn' 
      onClick={click}
      >clicked {cont} times
    </button>
  )

}


// main root / parent component
function App() {
  let isLoggedIn = true;

  const [count, setCount] = useState(0);

  function counter() {
    setCount(count + 1)
  }



  return (
    <div className="App">
      <h1>welcome to my app</h1>

      {/* javascript way: call a function */}
      {
        MyButton()
      }

      {/* react way: call a function or a component */}
      <MyButton/>

      <h2>{user.name}</h2>

      <img 
        src={user.imageUrl} 
        alt={`a girl ${user.name}`}
        className="avatar"
        style={
          {
            width: user.imageSize,
            height: user.imageSize
          }
          } />

      {
        isLoggedIn ? <AdminPanel/> : <LoginForm/>
      }

      {/* rendering lists */}
      <ul>
        {
          products.map((product, idx)=> {
            return (
              <li 
                key={product.id}
                style={
                  {
                    color: product.isFruit ? "magenta" : "darkgreen"
                  }
                }
                > 
                {product.title} 
              </li>
            )
          })
        }
      </ul>

      {/* responding to events */}
      <SpecialButton/>
      <SpecialButton2/>
      <br />
      <br />
      <br />

      {/* updating the screen */}
      {/* <h2>counters that update separately</h2> */}

      <h2>counters that update together</h2>
      <SpecialButton3 cont={count} click={counter}/>
      <SpecialButton3 cont={count} click={counter}/>




    </div>


  );
}





export default App;
