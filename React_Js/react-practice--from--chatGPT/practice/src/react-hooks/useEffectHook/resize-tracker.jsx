import { useEffect } from "react";


export default function ResizeTracker() {
  useEffect(() => {
    function handleResize() {
      console.log(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    console.log("useEffect ran");

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <h1>Resize the window</h1>;
}