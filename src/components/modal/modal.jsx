import React from 'react';
import './modal.css';

function Modal({ setIsOpen, modalText }) {
  return (
    <>
      <div className="darkBG" onClick={() => setIsOpen(false)} />
      <div className="centered">
        <div className="modal">
          <div className="modalContent">{modalText}</div>
          <div className="modalActions">
            <div className="actionsContainer">
              <button className="okBtn" onClick={() => setIsOpen(false)}>
                OK
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
