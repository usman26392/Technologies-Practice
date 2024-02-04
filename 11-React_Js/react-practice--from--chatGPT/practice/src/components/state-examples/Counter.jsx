import { useState } from "react"

// topic: state 

// In React functional components, state refers to a JavaScript object that contains data relevant to a component. Unlike class components, functional components couldn't traditionally manage state until the introduction of React Hooks in React 16.8. With the introduction of the useState hook, functional components gained the ability to manage state.

// The useState hook takes an initial state(here is zero) as an argument and returns an array with the current state value and a function to update that value. It allows functional components to have local state, making them more versatile and capable of handling dynamic data.


// state kissi b component ka aik object hota hay , ye object apnay component k data ko hold 
// kar k rakhta hay. jesy hi data may koi change ata hay, toh yey state(object) apnay aap ko update karta hay, jis ki waja say component re-render/recall hota hay.
// jis say component ko pata chal jata hay k kidar change aya hay.

// pata yey chala k, state k change honay par component apnay aap ko re-render karta hay.
// component aik marta by default khud render hota hay , or us k baad har state k change honay par apny aap ko re-render karta hay.



function Counter() {
  // The useState hook returns an array with the current state value and a function to update it.
  // // Destructuring state using array destructuring
  const [count, setCount] = useState(0);

  // OR way 
  // const state = useState(0);
 // const count = state[0];
 // const setCount = state[1];


  let incrementCount = function () {
    setCount((cv) => {
      return cv + 1
    })
  };

  

  return (
    <div>
      <h1>Counter</h1>
      <p>Count value: {count}</p>
      <button onClick={incrementCount}>press button</button>
    </div>
  )
}

export default Counter




//----------------------------- purposes of state in React
// The purpose of state in a functional component in React is to manage and store dynamic data that can change over time. State allows functional components to have internal, mutable data that can be updated during the component's lifecycle, in response to user interactions, API calls, or other events. The introduction of the `useState` hook in React makes it possible for functional components to utilize and manage state.

// Here are some key purposes of using state in functional components:

// 1. **Dynamic Data:**
//    - State enables functional components to maintain and update dynamic data, such as user input, real-time information from APIs, or data changes triggered by other components.

// 2. **Reactivity:**
//    - When the state of a component changes, React automatically re-renders the component, updating the UI to reflect the new state. This reactivity is fundamental to creating interactive and responsive user interfaces.

// 3. **User Interactions:**
//    - State is commonly used to manage user interactions and input. For example, a form component might use state to track changes in input fields, and a counter component might use state to keep track of the current count.

// 4. **Conditional Rendering:**
//    - State can be used to conditionally render different parts of a component based on the current state values. This is crucial for creating dynamic UIs that adapt to different scenarios.

// 5. **Component Lifecycle:**
//    - State in functional components allows you to implement logic that runs during specific points in the component's lifecycle. For example, you might use the `useEffect` hook to perform side effects (interact with outer of the APP ) when the component mounts, updates, or unmounts.

// 6. **Localized Component State:**
//    - Each instance of a functional component with state has its own isolated state. This helps create modular and reusable components that can maintain their internal data independently of other instances.

// 7. **Avoiding Class Components:**
//    - Before hooks were introduced, class components were the primary way to manage state in React. With the `useState` hook, functional components gained the ability to manage state, reducing the need for class components in many cases.

// 8. **Simplified Code:**
//    - Using state in functional components often leads to more concise and readable code. Hooks like `useState` make it straightforward to declare and manage state within the functional component itself.
