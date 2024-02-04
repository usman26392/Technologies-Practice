
import Greeting from './Greeting';

// topic: JSX

// JSX (JavaScript XML) is a syntax extension for JavaScript that looks similar to XML or HTML and is used with React to describe what the UI should look like. JSX provides a concise and readable way to define the structure of React elements. It is not a requirement for using React, but it is a commonly used and recommended syntax.
// In JSX, you can write HTML-like code within your JavaScript files.
// In this example, the Profile function returns a JSX expression that represents a React element. The code within the return statement looks similar to HTML, but it's actually JSX. JSX gets transpiled to JavaScript before it's rendered in the browser.
// JSX allows you to embed JavaScript expressions within curly braces {}
// In this case, the variable name is a JavaScript expression, and it gets evaluated and inserted into the JSX.
// JSX makes it more readable and intuitive to describe the structure of your UI in React, and it's a key part of the React development experience. Under the hood, tools like Babel are often used to transform JSX into equivalent JavaScript that the browser can understand.

function Profile() {
  const name = "Muhammad Usman";
  return (
    <div>
      <h1>Hello, {name} </h1>
      <p>I am Front end Web Developer!</p>
      <Greeting name="Muhammad Farhan" message="Welcome to Design!"/>
    </div>
  );
}

export default Profile;

// yahan par 'Greeting' component k liyey 'Profile' component is ka first parent component hay.
// matlab ye howa k child component ka parent component wo hota hay jis may wo call hota hay.


