import { useState } from "react";

export default function TodoApp() {
  const [todos, setTodos] = useState(["Study", "Exercise"]);

  const addTodo = () => {
    // setTodos([...todos, "Read Book"]);
    // OR
    setTodos((prevArray)=> [...prevArray, "Read Book"]);
  };

  return (
    <div>
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}