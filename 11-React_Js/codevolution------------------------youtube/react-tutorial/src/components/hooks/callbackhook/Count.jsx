import React from "react"



const Count = ({text, count} ) => {
    console.log("rendering count component!")
  return (
    <div>Count 
        { text }: { count }
        {/* {`${text}: ${count}`}  */}
    </div>
  )
}

export default React.memo(Count) 