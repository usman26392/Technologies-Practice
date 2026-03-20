import { useState } from "react";

// Topic: - updating objects in state 


export default function UserProfile() {
  const [user, setUser] = useState({
    name: "Ali",
    age: 22
  });

  const changeName = () => {
    setUser(prevUser => ({
      ...prevUser,
      name: "Ahmed"
    }));
  };

  return (
    <div>
      <h2>Name: {user.name}</h2>
      <h2>Age: {user.age}</h2>

      <button onClick={changeName}>Change Name</button>
    </div>
  );
}
