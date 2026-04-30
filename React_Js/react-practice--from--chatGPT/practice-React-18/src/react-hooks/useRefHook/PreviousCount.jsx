import { useEffect, useRef, useState } from "react";


export default function PreviousCount() {

    const [count, setCount] = useState(0);
    const previousCountRef = useRef(0); // Create a ref to store the previous count
    // console.log(previousCountRef)

    console.log("Component rendered!");


    const incrementCount = () => {
        setCount((prevCount) => (prevCount + 1));
    }

    useEffect(() => {
        // Update the ref with the current count on every render
        previousCountRef.current = count;
    }, [count]);



    return (
        <div>
            <h1>Current Count: {count}</h1>
            <h2>Previous Count: {previousCountRef.current}</h2>
            <button onClick={incrementCount}>Increment</button>

        </div>
    )
}




// Explanation:
// prevCountRef is created using useRef(0), initially storing the value 0.
// In the useEffect(), prevCountRef.current is updated with the current count value after every render, so it always holds the previous value of count.
// When the user clicks the "Increment" button, the count updates, and the component re-renders with the previous count still accessible through prevCountRef.current.
// This is a great use case for tracking previous values without triggering re-renders or causing performance issues.