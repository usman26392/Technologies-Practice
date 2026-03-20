

import useWindowWidth from "./useWindowWidth"

export default function WindowWidthComponent() {
    const windowWidth = useWindowWidth();

    console.log("component rendered that is where custom hook is using!");

    return (
        <div>WindowWidth: {windowWidth}px</div>
    )
}
