import { useEffect, useState } from "react";


// Topic: - State and Props Demo
export default function UserProfileDemo({ name, age, city }) {

  const [isFollowing, setIsFollowing] = useState(false); // state




  return (
    <div>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>City: {city}</p>
      <button onClick={() => setIsFollowing(!isFollowing)}>
        {isFollowing ? "Following" : "Follow"}
      </button>
    </div>
  )
}
