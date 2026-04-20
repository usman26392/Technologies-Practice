import { useReducer, useState } from "react";


// export default function NumberCounter() {
//     const [count, setCount] = useState(0);

//     function incrementNumber() {
//         setCount((prevNum)=> ( prevNum + 1 ))
//     }

//     function decrementNumber() {
//         setCount((prevNum)=> ( prevNum - 1 ))
//     }

//     function resetToZero() {
//         setCount((prevNum)=> ( prevNum = 0 ))
//     }


//   return (
//     <div>
//         <p>Count: {count}</p>
//         <div>
//             <button onClick={incrementNumber}>Increment number!</button>
//             <button onClick={decrementNumber} >Decrement number!</button>
//             <button onClick={resetToZero}>Reset to zero !</button>
//         </div>
//     </div>
//   )
// }




// Topic: - useReducer()
// NOTE:  Now we will write above example with useReducer hook

// Define the initial state
const initialState = {
    count: 0
};

// Define a reducer function
function counter(counterState, counterAction) {
    switch (counterAction.countType) {
        case "incrementNumber":
            return {
                count: counterState.count + 1
            };

        case "decrementNumber":
            return {
                count: counterState.count - 1
            };
        case "resetToZero":
            return {
                count: 0
            };

        default:
            throw new Error();
    }
}

// Component
export default function NumberCounter() {
    const [stateCount, dispatchCounter] = useReducer(counter, initialState);

    return (
        <div>
            <p>Count: {stateCount.count}</p>
            <div>
                <button onClick={() => dispatchCounter({ countType: "incrementNumber" })}>Increment number!</button>
                <button onClick={() => dispatchCounter({ countType: "decrementNumber" })} >Decrement number!</button>
                <button onClick={() => dispatchCounter({ countType: "resetToZero" })}>Reset to zero !</button>
            </div>
        </div>
    )
}