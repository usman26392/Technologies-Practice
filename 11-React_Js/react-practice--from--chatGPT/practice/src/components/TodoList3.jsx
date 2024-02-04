
import styles from "./TodoList3.module.css";

// topic: component styling

let todos = ["Learn React", "Build a project", "Deplay to production"];

function TodoList3() {
  return (
    <>
      <h2 className={`${styles['title']}`} >React styling</h2>
      <ul className={`${styles['todo-list']}`} >
        {todos.map(function (todo, idx) {
            return(
                <li key={idx}>{todo}</li>
            )
        })}
      </ul>
    </>
  );
}

export default TodoList3;


//------------ styling approaches

// Styling in React refers to the process of applying visual styles to React components, ensuring that the user interface (UI) looks appealing and follows design specifications. React allows developers to use various styling approaches, and the choice often depends on personal preference, project requirements, and the specific features provided by different styling solutions.

// Here are some common approaches to styling in React:

// 1. **Inline Styles:**
//    - React supports inline styles, where styles are defined directly within the JSX using JavaScript objects. Inline styles are applied using the `style` attribute.

//     ```jsx
//     import React from 'react';

//     const MyComponent = () => {
//       const textStyle = {
//         color: 'blue',
//         fontSize: '16px',
//         fontWeight: 'bold',
//       };

//       return (
//         <p style={textStyle}>
//           This text has inline styles.
//         </p>
//       );
//     };

//     export default MyComponent;
//     ```

// 2. **CSS Stylesheets:**
//    - You can create traditional CSS stylesheets and import them into your React components. This approach is familiar to many developers and provides a clear separation of concerns between HTML structure and styles.

//     ```jsx
//     // MyComponent.jsx
//     import React from 'react';
//     import './MyComponent.css';

//     const MyComponent = () => {
//       return (
//         <p className="my-text">
//           This text is styled with CSS.
//         </p>
//       );
//     };

//     export default MyComponent;
//     ```

//     ```css
//     /* MyComponent.css */
//     .my-text {
//       color: red;
//       font-size: 18px;
//       font-weight: bold;
//     }
//     ```

// 3. **CSS-in-JS Libraries:**
//    - CSS-in-JS libraries, such as Styled Components, Emotion, and Aphrodite, allow you to write styles directly within your JavaScript or JSX files. These libraries often provide a way to encapsulate styles and manage them on a component level.

//     ```jsx
//     // Styled Components example
//     import styled from 'styled-components';

//     const StyledParagraph = styled.p`
//       color: green;
//       font-size: 20px;
//       font-weight: bold;
//     `;

//     const MyComponent = () => {
//       return (
//         <StyledParagraph>
//           This text is styled with Styled Components.
//         </StyledParagraph>
//       );
//     };

//     export default MyComponent;
//     ```

// 4. **CSS Modules:**
//    - CSS Modules allow you to write modular styles by importing and using styles as module objects in your React components. This helps avoid naming conflicts and provides a local scope for styles.

//     ```jsx
//     // MyComponent.jsx
//     import React from 'react';
//     import styles from './MyComponent.module.css';

//     const MyComponent = () => {
//       return (
//         <p className={styles.myText}>
//           This text is styled with CSS Modules.
//         </p>
//       );
//     };

//     export default MyComponent;
//     ```

//     ```css
//     /* MyComponent.module.css */
//     .myText {
//       color: purple;
//       font-size: 22px;
//       font-weight: bold;
//     }
//     ```

// Choosing the appropriate styling method often depends on factors such as project requirements, team preferences, and the specific features provided by each approach. In many cases, a combination of these methods is used within the same project to meet different styling needs.













