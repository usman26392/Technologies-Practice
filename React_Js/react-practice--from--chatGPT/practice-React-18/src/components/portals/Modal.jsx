
import { useEffect, useState } from "react"
import style from "./Modal.module.css"
import { createPortal } from "react-dom";



// topic: - React.createPortal()

// portal component
function Modal({ isOpen, onClose }) {

    let portalRoot = document.getElementById('modal-root');
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
        isOpen ? createPortal(
            <div className={`${style['modal-overlay']}`}>
                <div className="modal-content" onClick={(e) => (e.preventDefault())}>
                    <h2>This is a modal</h2>
                    <p>Content inside the modal</p>
                </div>
                <button onClick={onClose}>close Modal</button>
            </div>,
            document.getElementById('modal-root')
        ) : null
    )
}

export default Modal