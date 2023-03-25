

// conditional rendering
const UserGreeting = () => {
  let isLoggedIn = true;
  return (
    <div>
      <h1>welcome to {isLoggedIn ? "Usman" : "Guest"} </h1>
    </div>
  );
};

export default UserGreeting;
