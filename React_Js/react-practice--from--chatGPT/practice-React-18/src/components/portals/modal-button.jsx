import { useState } from "react";
import Modal from "./Modal";



export default function ModalButton() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    console.log("ModalButton Component rendered!")

    function openModal() {
        setIsModalOpen(true);
    }

    function closeModal() {
        setIsModalOpen(false);
    }


    return (
        <>
            <Modal isOpen={isModalOpen} onClose={closeModal}></Modal>
            <button onClick={openModal}>Open Modal</button>
        </>
    )
}
