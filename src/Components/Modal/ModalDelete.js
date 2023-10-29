import { useState, Dispatch, SetStateAction } from "react";
import ReactPortal from "./ReactPortal";
import "./css/Modal.css";
import SymbolWarning from "./SymbolWarning";

// Modal component.
const Modal = ({ handleClose, handleDelete }) => {

  const confirmDelete = () => {
    if (handleDelete) handleDelete();
  };
  return (
    <ReactPortal wrapperId="portal-modal-container-delete">
      <div className="modal">
        <div className="modal__container">
          <div className="modal__content">
            <SymbolWarning />
            <div className="modal__container--text">
              <h3 className="modal__modal-title">Confirm post removal?</h3>
              <p>This action cannot be undone</p>
            </div>
          </div>
          <div className="friendRequest__buttons modal__buttons">
            <button
              className="friendRequest__buttons--accept"
              onClick={() => handleClose(false)}
            >
              CANCEL
            </button>
            <button className="modal__buttons--remove" onClick={confirmDelete}>
              REMOVE
            </button>
          </div>
        </div>
      </div>
    </ReactPortal>
  );
};
export default Modal;
