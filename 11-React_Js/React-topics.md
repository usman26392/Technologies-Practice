# topics of this tutorial
  - components(class and functional)
  - JSX (JavaScript XML)
  - props  (Properties), They allow data to be passed from a 'parent' component to a 'child' component.
  - state
  - Stateful and Stateless Components
  - setState
  - destructuring props and state
  - event handling
  - method as props
  - conditional rendering (etc: if statements or with ternary operator , condition ? true-statement : false-statement )
  - list rendering  (etc: with map method )
  - component styling
  - form handling
  - component lifecycle methods
  - fragments
  - pure component
  - memo: use for pure component when functional component.
  - Refs: with the help of refs we can touch/access directly to the DOM(document object model). i mean without virtual DOM.
  - HOC: A pattern where a component is wrapped with another component to enhance its functionality.
  - Render Props: A technique for sharing code between React components using a 'prop' whose value is a function.
  - Error Boundaries: 
  - portals: we can render a component outside the DOM root element (where id="root" ). use for modal or popups
  - context API: Passing Data Deeply without every touching nested component. or 





# hooks
 - useState(): local state management.
 - useEffect(): any code that needs to be executed after the component renders.
 - useContext(): similar concept of context API.
 - useReducer(): for global state management, similar to redux.
 - useCallback(): use for performance optimization. only render that component, that will be updated.
 - useMemo(): use for performance optimization.
 - useRef(): we can directly access DOM nodes with the help of useRef() hook.
 - use custom hook: alternative to HOC.







# short definitions

React is a JavaScript library for building user interfaces. It provides a declarative and efficient way to create and update UIs. Here are some key topics and features associated with React:

1. **Components:**
   - Components are the building blocks of a React application.
   - They are reusable and encapsulate the UI logic.
   - Components can be either functional (stateless) or class-based (stateful).

2. **JSX (JavaScript XML):**
   - JSX is a syntax extension for JavaScript recommended by React.
   - It allows you to write HTML elements and components in a syntax that looks similar to XML or HTML.

3. **Props (Properties):**
   - Props are inputs that components can receive.
   - They allow data to be passed from a parent component to a child component.

4. **State:**
   - State represents the local state of a component.
   - It is used for managing dynamic data and re-rendering components when the state changes.

5. **Stateful and Stateless Components:**
   - Stateful components manage state. (class-based)
   - Stateless components (functional components) don't have state and are primarily used for presentation.

6. **Lifecycle Methods:**
   - `componentDidMount`, `componentDidUpdate`, `componentWillUnmount`, etc.
   - Lifecycle methods allow you to hook into different phases of a component's existence.

7. **React Hooks:**
   - Introduced in React 16.8 to allow state and other React features in functional components.
   - Examples include `useState`, `useEffect`, `useContext`, etc.

8. **Conditional Rendering:**
   - Rendering components or elements conditionally based on certain conditions.
   - Examples include `if` statements or the ternary operator `condition ? true-statement : false-statement` .

9. **Lists and Keys:**
   - Rendering lists of items using the `map` function and providing a unique key for each item.

10. **Forms and Controlled Components:**
    - Handling form input and maintaining the form state in the component's state.

11. **Event Handling:**
    - Handling user interactions such as clicks, input changes, etc.

12. **Context API:**
    - Providing a way to pass data through the component tree without having to pass props manually at every level.

13. **Refs:**
    - Refs are used to directly interact with a DOM element or a React component.

14. **Higher-Order Components (HOC):**
    - A pattern where a component is wrapped with another component to enhance its functionality.

15. **Render Props:**
    - A technique for sharing code between React components using a prop whose value is a function.

16. **Error Boundaries:**
    - Components that catch JavaScript errors anywhere in their child component tree and log those errors or display a fallback UI.

17. **React Router:**
    - A library for handling navigation in React applications.

18. **Redux:**
    - A predictable state container for JavaScript apps.
    - Commonly used with React for managing the state of the application.

19. **Context API:**
    - A way to share values like themes, authentication status, etc., between components without explicitly passing a prop through every level of the tree.

20. **React Hooks:**
    - Introduced in React 16.8, hooks allow functional components to use state and lifecycle features previously only available in class components.

These are some of the fundamental topics and features associated with React. React is a versatile library, and its ecosystem continues to evolve with new features and best practices.



# hooks definitions
  - useEffect()
  - A side effect in the context of programming generally refers to any operation or behavior that occurs in a system outside of the primary flow of the program. In the case of React and many other JavaScript applications, side effects often involve interactions with the external world, such as:
    - Data fetching: Retrieving data from an API or a server.
    - Subscription: Establishing connections to real-time data sources.
    - Manual DOM manipulation: Directly interacting with the Document Object Model (DOM).
    - Timers and intervals: Using setTimeout or setInterval functions.
    - Logging and debugging: Outputting information for debugging purposes.

    In React, functional components are primarily responsible for rendering UI based on the current state and props. However, there are scenarios where you need to perform actions that go beyond rendering, and that's where side effects come into play.

    The useEffect hook in React is specifically designed to handle side effects in functional components. It allows you to perform actions after the component renders, and it's commonly used for tasks like data fetching, subscriptions, and other asynchronous operations.

    Here's a breakdown of how useEffect helps manage side effects:

    Execution Timing: The function passed to useEffect is executed after the component has rendered.
    Dependencies: You can specify dependencies as a second argument. If the dependencies change between renders, the effect will re-run.
    Cleanup: The function returned from useEffect can be used for cleanup. It runs when the component is unmounted or when the dependencies change before the next render.


import React, { useState, useEffect } from 'react';

- function DataFetchingComponent() {
  const [data, setData] = useState(null);

-  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.example.com/data');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); // Invoke the function to initiate data fetching

    return () => {
      // Cleanup (optional)
      // This will be called if the component is unmounted
      // or if the dependency array changes before the next render.
    };
  }, []); // Empty dependency array means the effect runs once after the initial render

-  return (
    <div>
      {/* Render data */}
      {data && (
        <ul>
          {data.map(item => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
    
