import React, { useEffect, useState } from "react";
import ModalWindow from "./ModalWindow";
import './App.css';

function App() {
  const [events, setEvent] = useState({});
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetch("https://www.mocky.io/v2/5d3752f1310000fc74b0788d")
    .then(response => response.json())
    .then(data => setEvent(data))
    .catch(err => console.error("Request Error ", err));
  },[])

  const toggleModal = (e) => {
    if (showModal) {
      setShowModal(false);
    } else {
      setShowModal(true);
    }
  };

  return (
    <div className="App">
      <button className="toggle-button" onClick={e => {
          toggleModal(e);
        }}>show Modal</button>
      <ModalWindow data={events} show={showModal} onClose={toggleModal}></ModalWindow>
    </div>
  );
}

export default App;
