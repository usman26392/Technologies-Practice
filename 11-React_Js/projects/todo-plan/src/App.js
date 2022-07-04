// import logo from './logo.svg';

import { useState } from "react";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Plan from "./components/Plan";



function App() {
  const[ items, setItems] = useState([]);
  const[ text, setText] = useState("");

  function Del(id) {
    // console.log("deleted items")
    // console.log(i)
    const oldItem = [...items];
    // console.log(oldItem)
    const restItems = oldItem.filter((elm, i)=> {
      return (
        i !== id 
      )
    });
    console.log(restItems)
    setItems(restItems);
  }

  return (
    <div className="App">
      <div className="container-fluid my-5">
        <div className="row">
          <div className="col-sm-6 mx-auto">
            <h1 className="text-center shadow-lg p-3 text-white ">Today's Plan</h1>
            <div className="row justify-content-center">
              <div className="col-md-9">
                <input type="text"
                  className="form-control"
                  placeholder="write plan here" 
                  value={text}
                  onChange = {(e)=> {
                    setText(e.target.value);
                  }}  
                    />
              </div>
              <div className="col-md-2">
                <button className="btn btn-success w-100 mt-2 mt-md-0"
                  onClick={(e)=> {
                    if(text !== "") {
                      const arr = [...items, text];
                      setItems(arr);
                      setText("");
                      // console.log(arr)
                      // console.log(items)
                    }
                  }}

                >Add</button>
              </div>
              <div className="col-12">
                <div className="container-fluid">
                  <ul className="list-unstyled p-3">
                    {
                      items.map((item, idx)=> {
                        return (
                          <Plan listItem = {item} key={idx} id={idx} del={Del} />
                        )
                      })
                    }
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
