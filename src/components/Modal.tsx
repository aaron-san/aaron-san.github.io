import React from "react";
import { createPortal } from "react-dom";

const Modal = ({ open, children, onClose }: any) => {
  if (!open) return null;

  return createPortal(
    <>
      <div className="overlay_styles" />
      <div className="modal_styles">
        <button onClick={onClose}>Close Modal </button>
        {children}
      </div>
    </>,
    document.getElementById("portal")!
  );
};

export default Modal;
