import { useEffect, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

//   console.log("component on re-render state now : " + count);

  function increment() {

    // way1: wrong
    // setCount(count + 1)

    // right way!
    // setCount(function(prevState) {
    //     return (prevState + 1)
    // })
    // or
    setCount(prevState => (prevState + 1 ))

    console.log("component's state is now before re-render: " + count);
  }

  function addFive() {
    increment();
    increment();
    increment();
    increment();
    increment();
  }

  useEffect(() => {
    console.log("component on re-render from useEffect state now : " + count);
  }, [count]);

  return (
    <div>
      <h1>Counter</h1>
      <h2>count: {count} </h2>
      <button onClick={increment}>increment</button>
    </div>
  );
};

export default Counter;
