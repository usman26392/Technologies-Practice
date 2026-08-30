// import logo from './logo.svg';

import { useState } from 'react';
import './App.css';
import Todoitem from './Todoitem';

function App() {
  const [fieldtext, setFieldtext] = useState("");
  const [listitem, setListitem] = useState([]);
  
  // delete items
  function delItem(id) {
    let restItem = listitem.filter((itm, idx )=> {
      return( idx !== id )
      // console.log(itm)
      // console.log(id)
    });
    setListitem(restItem)
    console.log(restItem)
  }

  return (
    <div className="App">
      <h1 className='todo-title'>Todo plans</h1>
      <form action="" className='todo-form'>
        <div className="todo-form-field">
          <input type="text" 
                placeholder='Enter your plan'
                value={fieldtext}
                onChange={(env)=> {
                  // console.log(env.target.value)
                  setFieldtext(env.target.value)
                  // console.log(fieldtext)
                }}
          />
          <button className='todo-form-btn'
            onClick={(e)=> {
              if(fieldtext !== "") {
                e.preventDefault()
                let items = [...listitem, fieldtext];
                // console.log(items)
                setListitem(items);
                setFieldtext("");
              }
            }}
          >Add</button>
        </div>
      </form>
      <ul className="todo-list">
        {
          listitem.map((itmName, idx)=> {
            return(
              <Todoitem item={itmName} key={idx} id={idx} del={delItem} />
            )
          } )
        }
      </ul>
    </div>
  );
}

export default App;




