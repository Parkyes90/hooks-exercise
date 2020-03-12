import React from "react";
import useFullscreen from "./hooks/useFullscreen";
import bg from "./assets/img/harley-davidson-aiBYhrzsQw4-unsplash.jpg";

function App() {
  const { element, toggleFull } = useFullscreen();
  return (
    <div style={{ height: "1000vh" }}>
      <img src={bg} alt="ride bicycle" ref={element} onClick={toggleFull} />
    </div>
  );
}

export default App;
