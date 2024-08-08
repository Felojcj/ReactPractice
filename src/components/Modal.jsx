import React from "react";
import { backdrop, modal } from "./Modal.module.css";
import { useNavigate } from "react-router-dom";

const Modal = ({ children }) => {
  const navigate = useNavigate();

  const closeHandler = () => {
    navigate("..");
  };

  return (
    <>
      <div className={backdrop} onClick={closeHandler} />
      <dialog open className={modal}>
        {children}
      </dialog>
    </>
  );
};

export default Modal;
