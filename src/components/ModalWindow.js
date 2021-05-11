import React from "react";
import TechInteractiveEvent from "./TechInteractiveEvent";


function ModalWindow({ data, show, onClose }) {
  return (
    <TechInteractiveEvent data={data} show={show} onClose={onClose} />
  )
}

export default ModalWindow;