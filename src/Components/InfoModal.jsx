import React from "react";
import "../Styles/Modal.css";

const InfoModal = ({ children, close }) => {
  return (
    <div className="back-modal">
      <div className="modal-container">
      <button onClick={close}> &#10005; </button>
        {children}
      </div>
    </div>
  );
};

export default InfoModal;
