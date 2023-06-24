import { useReducer } from "react"


const initialState = 0;
const reducer = (state, action)=> {
    switch(action) {
        case "increment": return state + 1;
        case "decrement": return state - 1;
        case "reset":     return initialState;
        default: return state;
    }
}


const Counter2 = () => {
    const [count, dispatch] = useReducer(reducer, initialState);
    // useReducer always be re-render. 
    console.log('useReducer rendered ')

  return (
    <>
        <div>Counter - {count} </div>
        <div>
            <button onClick={()=> (dispatch("increment")) } >Icrement</button>
            <button onClick={()=> (dispatch("decrement")) } >Decrement</button>
            <button onClick={()=> (dispatch("reset")) } >Reset</button>
        </div>
    </>
  )
}

export default Counter2