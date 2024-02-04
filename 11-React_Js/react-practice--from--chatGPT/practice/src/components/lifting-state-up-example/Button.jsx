
// topic: lifting state up
function Button({countValue, handleProduct}) {
  return (
    <div>
        <p>Product Count: {countValue} </p>
        <button onClick={handleProduct}>add to cart</button>
    </div>
  )
}

export default Button       


// Details
// Lifting state up in React is a pattern where you move the state from a lower-level component to a higher-level component in the component tree. This is done to share state and behavior between components, especially when multiple components need access to the same piece of state or when child components need to communicate with each other via their parent.

// The term "lifting state up" is used because you are essentially lifting the state from a lower-level component to a common ancestor component. This can be beneficial for managing the application's state in a centralized and predictable way.

// By lifting the state up to the parent component, both the parent and child components have access to the same piece of state. This makes it easy to share data and behavior between components in a controlled and predictable way.


// Key benefits of lifting state up include:
// Single Source of Truth:
// Having state managed in a common ancestor component ensures that there's a single source of truth for that state. All components that need access to the state get it from the same source.

// Simplified Communication: 
// Parent and child components can communicate with each other through props and callback functions, making it clear how data and actions flow through the component tree.

// Reusable Components:
// By lifting state up, you can create more reusable child components that don't rely on specific state. This improves component modularity and makes components easier to reuse in different parts of the application.

// Lifting state up is a powerful pattern in React, especially in larger applications where effective state management and communication between components are crucial.












