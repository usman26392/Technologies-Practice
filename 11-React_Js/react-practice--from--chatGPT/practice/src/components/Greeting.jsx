
// topic: functional component

// props: aik object hota hay kissi b component ka, jis k paas properties hoti hayn agar component k liye pass ki gai hun.
// warna empty object hota hay.
// behind the scene
// props = {
//     name,
//     message
// }


// In React, functional components are a type of component that are defined as JavaScript functions. They are also sometimes referred to as stateless components because they don't have their own internal state or lifecycle methods. Instead, they receive props as arguments and return React elements to describe the UI.

// In this example, the Greeting component is a functional component that takes 'name' and 'message' as props and renders a greeting message. The App component then uses the Greeting component twice with different prop values.

// Functional components became even more powerful with the introduction of React Hooks, which allow functional components to manage state and side effects(interaction with outside the flow of APP). This makes functional components a versatile and widely used feature in React development.


// Functional component
// function Greeting(props) {
//     console.log(props)
//   return (
//     <div>
//         <h1>{props.name}</h1>
//         <p>{props.message} </p>
//     </div>
//   )
// }

// export default Greeting


// or destructuring props object
function Greeting({name, message}) {
  return (
    <div>
        <h1>{name}</h1>
        <p>{message} </p>
    </div>
  )
}

export default Greeting

