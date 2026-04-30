

import { useEffect, useLayoutEffect } from "react";


// Topic: - useLayoutEffect()

export default function ChangeBackground() {
    

    useLayoutEffect(() => {
        const bodyEL = document.body;
        bodyEL.style.backgroundColor = "lightblue";

        return () => {
            bodyEL.style.backgroundColor = "";
        }
    }, []);



    return (
        <div>ChangeBackground</div>
    )
}
