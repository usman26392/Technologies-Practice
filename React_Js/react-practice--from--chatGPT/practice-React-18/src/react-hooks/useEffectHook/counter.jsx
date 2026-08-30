import { useEffect, useState } from "react";


export default function Counter() {
    const [count, setCount] = useState(0);


    useEffect(() => {
        console.log("Count changed:", count);
    }, [count]);

    return (
        <>
            <h2>Counter use effect</h2>
            <button onClick={() => setCount(count + 1)}>
                {count}
            </button>
        </>
    );



}
