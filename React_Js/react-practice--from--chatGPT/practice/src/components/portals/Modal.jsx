
import { useEffect, useState } from "react"
import style from "./Modal.module.css"
import { createPortal } from "react-dom";



// topic: - React.createPortal()

// portal component
function Modal({isOpen, onClose, children}) {
    let portalRoot = document.getElementById('portal-root');
    let modalContainer = document.createElement("div");

    console.log("Modal component rendered");

    // Attach the modal container to the portal root on mount
    useEffect(() => {
      portalRoot.appendChild(modalContainer)
    
      // Cleanup on unmount
      return () => {
        portalRoot.removeChild(modalContainer)
      }
    }, [portalRoot, modalContainer]);

    
    
    return (
        isOpen 
        ? createPortal (
            <div className={`${style['modal-overlay']}`} onClick={onClose}>
                <div className="modal-content" onClick={(e)=> (e.preventDefault())}>
                    {children}
                </div>
            </div>,
            modalContainer
        )
        : null
    )
}

export default Modal