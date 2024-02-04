import { useEffect, useState } from "react"
import ReactDOM from 'react-dom';
import style from "./Modal.module.css"




// topic: portals
// portal component
function Modal({isOpen, onClose, children}) {
    let portalRoot = document.getElementById('portal-root');
    let modalContainer = document.createElement("div");

    // Attach the modal container to the portal root on mount
    useEffect(() => {
      portalRoot.appendChild(modalContainer)
    
      // Cleanup on unmount
      return () => {
        portalRoot.removeChild(modalContainer)
      }
    }, [portalRoot, modalContainer])
    
    return (
        isOpen ? ReactDOM.createPortal (
            <div className={`${style['modal-overlay']}`} onClick={onClose}>
                <div className="modal-content" onClick={(e)=> (e.preventDefault())}>
                    {
                        children
                    }
                </div>
            </div>,
            modalContainer
        ): null
    )
}

export default Modal