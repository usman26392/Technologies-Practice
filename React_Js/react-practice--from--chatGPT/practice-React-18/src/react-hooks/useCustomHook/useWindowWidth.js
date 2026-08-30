import { useEffect, useState } from "react";


// custom hook
export default function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  console.log('custom hook logic is executed!');

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    // on window's resize , window width will be set on width state.
    window.addEventListener("resize", handleResize);
    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return width;
}


