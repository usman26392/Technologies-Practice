

import { useEffect, useMemo, useState } from "react";


export default function SquaredCounter() {
    const [num, setNum] = useState(0);
    const [look, setLook] = useState("red");

    console.log("Component ran: squared counter!");

    function increment() {
        setNum((prev) => prev + 1);
    }

    // without useMemo hook
    let squaredNumber = function () {
        console.log("Function ran: squaredNumber!");
        return num * num;
    }

    // with useMemo hook
    // let squaredNumber = useMemo(function() {
    //     console.log("Function ran: squaredNumber!");
    //     return num * num;
    // }, [num]);

    function changeColor() {
        setLook((prev) => {
            return prev = "green"
        })
    }

    useEffect(() => {
        squaredNumber();
      
    }, [])
    

    return (
        <div>
            {/* without memo */}
            {/* <p style={{
                color: look
            }}>{squaredNumber()}</p> */}

            {/* with memo  */}
            {/* <p style={{
                color: look
            }}>{squaredNumber}</p> */}

            <button onClick={increment}>Increase</button>
            <button onClick={changeColor}>Change Color</button>
        </div>
    )
}
