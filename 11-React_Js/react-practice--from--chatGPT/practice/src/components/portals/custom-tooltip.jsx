import { createPortal } from "react-dom"



export default function CustomTooltip({children}) {
  return (
    createPortal(
        children,
        document.getElementById("tooltip-root") // portal target
    )
  )
}
