
import { useContext, useState } from "react";
import { createContext } from "react"



// Create a Context
const CounterContext = createContext();


// CounterProvider Component: 
// This will wrap our entire app and 'provide' the state and functions via Context.
function CounterProvider({children}) {
    const [count, setCount] = useState(0);

    // Define functions to increment and decrement the count
    function incrementNum() {
        setCount((c)=> c + 1 )
    }

    function decrementNum() {
        setCount((c)=> c - 1 )
    }

    // Create a 'context value' with state and functions
    const contextValue = {
        count,
        incrementNum,
        decrementNum
    }

    // Provide the context value to the children
    return (
        <CounterContext.Provider value={contextValue} >
            {children}
        </CounterContext.Provider>
    )
}


// Counter Component: Displays the count and provides buttons to increment and decrement
function Counter() {
    let { count } = useContext(CounterContext);
    // console.log(count);
    return (
        <h1>Counter: {count}</h1>
    )
}


// Control Component: Provides buttons to increment and decrement
function Control() {
    let { incrementNum, decrementNum } = useContext(CounterContext);

    return (
        <div>
            <button onClick={incrementNum}>Increment</button>
            <button onClick={decrementNum}>Decrement</button>
        </div>
    )
}


// App Component:
// Wraps the Counter and Control components with CounterProvider
function CounterContextApp() {
    return (
        <CounterProvider>
            <Counter/>
            <Control/>
        </CounterProvider>
    )
}


export default CounterContextApp;



















