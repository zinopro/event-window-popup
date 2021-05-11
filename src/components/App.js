import React, { useState } from "react";
import ModalWindow from "./ModalWindow";
import { useEventInfo } from "../hooks/useEventInfo";
import './App.css';

const url = "https://www.mocky.io/v2/5d3752f1310000fc74b0788d";

function App() {

  const { events , isLoading } = useEventInfo(url);
  const [showModal, setShowModal] = useState(false);


  const toggleModal = () => {
    if (showModal) {
      setShowModal(false);
    } else {
      setShowModal(true);
    }
  };

  return (
    <div className="App">
       {
         isLoading ? <p>Loading data...</p> : <button className="toggle-button" onClick={e => {
           toggleModal(e);
         }}>show Modal</button>
      }
      <ModalWindow data={events} show={showModal} onClose={toggleModal} />
    </div>
  );
}

export default App;
