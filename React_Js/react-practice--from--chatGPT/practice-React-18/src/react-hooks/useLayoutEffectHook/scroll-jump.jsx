

import { useLayoutEffect } from "react"


export default function ScrollJump() {

    useLayoutEffect(() => {
        window.scrollTo(0, 0); // Scroll immediately
    }, []);

    return (
        <div>ScrollJump</div>
    )
}
