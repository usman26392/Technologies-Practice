import { useState } from "react"

// topic: event handling

function Button() {
    const [buttonText, setButtonText] = useState('click me!');
    // console.log(buttonText)

    // Event handler
    function handleTextofButton(e) {
        setButtonText("button clicked!")
        e.target.style.color = "red"
    }

    return (
        <div>
            <button onClick={handleTextofButton}>{buttonText}</button>
        </div>
    )
}

export default Button


// details:
// Event handling in React refers to the process of capturing and responding to user interactions or browser events within React components. These interactions could include mouse clicks, key presses, form submissions, or other events triggered by the user or the browser.

// In React, event handling is similar to handling events in standard JavaScript but with some differences due to React's synthetic event system and its declarative nature. Event handlers are functions that are executed when a specific event occurs. These handlers are typically defined as methods in a class component or as functions in functional components.

// The handleTextofButton function is the event handler that updates the state using setButtonText .
// The onClick attribute is used in JSX to attach the event handler to the button's click event.









