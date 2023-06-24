import React from "react"



const ChildTwo = () => {
    console.log("childTwo component rendered")
    return (
        <div>ChildTwo Component </div>
    )
}

export const MemoizedChildTwo = React.memo(ChildTwo)