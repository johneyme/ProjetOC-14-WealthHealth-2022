import React from 'react';
import './modal.css';

function Modal({ setIsOpen }) {
  return (
    <>
      <div className="darkBG" onClick={() => setIsOpen(false)} />
      <div className="centered">
        <div className="modal">
          <div className="modalContent">Employee Created!</div>
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
