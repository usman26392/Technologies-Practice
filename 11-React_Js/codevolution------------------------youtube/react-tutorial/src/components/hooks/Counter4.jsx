
import { useReducer } from "react";

// example2: counter with useReducer and with object
const initialState = {
    firstCounter: 0,
    secondCounter: 20
}

const reducer = (state, action)=> {
    // console.log(state)
    console.log(action)
    switch (action.type) {
      case "increment":
        return { ...state,
            firstCounter: state.firstCounter + action.value
        }
      case "decrement":
        return { ...state,
            firstCounter: state.firstCounter - action.value
        }
      case "incrementSecondCounter": 
        return {...state,
          secondCounter: state.secondCounter + action.value
        }
      case "reset":
        return initialState;
      default:
        return state
    }
}


const Counter4 = () => {
    const [newCount, dispatch] = useReducer(reducer , initialState);
    // console.log(newCount)

    return (
      <>
        <div>First Counter: {newCount.firstCounter }</div>
        <div>Second Counter: {newCount.secondCounter }</div>
        <button onClick={()=> dispatch({type:"increment", value: 1  })} >Increment</button>
        <button onClick={()=> dispatch({type:"decrement", value: 1 })} >Decrement</button>
        <button onClick={()=> dispatch({type:"increment", value: 5 })} >Increment 5</button>
        <div>
          <button onClick={()=> dispatch({type:"incrementSecondCounter", value: 50 })} >Increment 50 by second counter </button>
        </div>
        <button onClick={()=> dispatch({type:"reset"})} >Reset</button>
      </>
    )
  }
  
  export default Counter4