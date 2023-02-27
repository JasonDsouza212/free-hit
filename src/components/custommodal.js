import React, { useState } from "react";
import Modal from "react-modal";

// Define the modal style and content
const customModalStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#232427"
  },
};

function CustomModal({ buttons, modalState=false, setModalState, filterProduct }) {
  const [modalIsOpen, setModalIsOpen] = useState(modalState);

  // Function to toggle the modal state
  const toggleModal = () => {
    setModalIsOpen(!modalIsOpen);
    setModalState(!modalIsOpen);
  };

  return (
    <div>
      {/* Render the list of buttons */}
      
      {/* Define the modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={toggleModal}
        style={customModalStyles}
        ariaHideApp={false}
      >
        {/* Render the close button */}
        <button onClick={toggleModal} style={{position : "absolute", top : "15px", right:"5px",padding:"7px 6px", background:"none", color : "white", fontWeight : 600, fontSize: "1.2rem", border : "none"}}>X</button>
        {/* Add any additional content to display in the modal */}
        {buttons.map((button, index) => (
          button
      ))}
      </Modal>
    </div>
  );
};

export default CustomModal;
