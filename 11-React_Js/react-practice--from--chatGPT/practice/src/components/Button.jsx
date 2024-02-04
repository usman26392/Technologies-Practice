
// topic: method pass as props

// In React, "method as props" refers to the practice of passing a function (method) as a prop from a parent component to a child component. This allows the child component to call the function provided by the parent, effectively enabling communication and interaction between the parent and child components.

// Passing methods as props is a powerful pattern in React, as it allows child components to trigger actions or update state in their parent components. This is particularly useful for creating interactive and dynamic user interfaces. It promotes the concept of lifting state up, where state is managed in a common ancestor component, and relevant functions are passed down to child components as props.


// The purpose of "method as props" in React is to facilitate communication and interaction between parent and child components. This pattern allows a parent component to pass down functions (methods) to its child components, enabling the child components to trigger actions or update state in the parent component. This promotes a unidirectional flow of data and behavior in React applications.

// Here are some key purposes and advantages of using "method as props":

// 1. **Communication between Components:**
// - Parent components can define functions to handle specific actions or events.
// - These functions are then passed down to child components as props.
// - When an event occurs in the child component (e.g., a button click), the passed-down function (method) is called, allowing the child to communicate with the parent.

// 2. **State Management:**
// - Parent components often manage state data that needs to be updated based on user interactions in child components.
// - By passing down methods that update the parent's state, child components can modify the state of the parent when needed.

// 3. **Reusability:**
// - The "method as props" pattern enhances component reusability. A child component can be designed to work with various parent components as long as they provide the necessary methods.

// 4. **Separation of Concerns:**
// - Each component can focus on its specific responsibility. Child components can be designed to present information or handle user interactions, while parent components manage the overall application state.

// 5. **Flexibility and Customization:**
// - Child components can be more flexible and customizable because they don't need to know how their actions will be handled. They rely on methods provided by the parent, allowing for more dynamic behavior.



// Child component
// accepting function as a props.
function Button(props) {
  return (
    <div>
        <button onClick={props.clickEvent} >click me!</button>
    </div>
  )
}

export default Button