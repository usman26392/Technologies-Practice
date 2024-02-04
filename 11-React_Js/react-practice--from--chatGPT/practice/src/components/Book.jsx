// topic: props

// In React, "props" is short for properties, and it's a special keyword that refers to the properties or attributes passed to a React component. Props are a way to pass data from a parent component to a child component in a unidirectional flow. They allow you to customize and configure a component when you use it.

// Props are read-only, meaning that a component cannot modify its props directly. They are immutable. If a component needs to update based on changing data, it typically does so by using state, which can be managed within the component.

// In this example, the Book component takes both title and author props, and the App component provides the values for these props when using the Book component.

// Props provide a way to make components reusable and configurable, allowing you to pass different data to the same component structure.

// props: aik object hota hay kissi b component ka, jis k paas properties hoti hayn agar component k liye pass ki gai hun.
// warna empty object hota hay.

// Child component that receives props
// function Book(props) {
//   return (
//     <div>
//         <h2>Title: {props.title } </h2>
//         <p>Author: {props.author }</p>
//     </div>
//   )
// }

// export default Book



// OR:  destructuring of props object
function Book({title, author}) {
  return (
    <div>
      <h2>Title: {title} </h2>
      <p>Author: {author}</p>
    </div>
  );
}

export default Book;
