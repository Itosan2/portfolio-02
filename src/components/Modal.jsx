import React, { useEffect } from "react";

function Modal({ modalContent, closeModal }) {
  useEffect(() => {
    setTimeout(() => {
      closeModal();
    }, 3000);
  });
  return (
    <div className="modal-wrapper">
      <div className="modal-text">
        <div className="modal-title">Email Sent</div>
        <p> {`${modalContent}, thanks for your email`}</p>
        <p>I'll respond to your email the soonest</p>
      </div>
    </div>
  );
}

export default Modal;
