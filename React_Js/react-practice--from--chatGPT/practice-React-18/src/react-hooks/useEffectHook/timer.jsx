import { useState, useEffect } from "react";

export default function Timer() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(prev => prev + 1);
    }, 1000);
    console.log("Time:", time)
    
    return () => clearInterval(interval);
  }, []);

  return <h1>{time}</h1>;
}