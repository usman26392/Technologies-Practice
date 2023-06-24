import { createPortal } from "react-dom"



const PortalDemo = () => {
  return (
    <div>
        <p>This child is placed in the parent div.</p>
        {
            createPortal(
                <p>This child is placed in the document body, and outside of the root element.</p>,
                document.body
            )
        }
    </div>
  )
}

export default PortalDemo