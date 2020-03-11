import React from "react";
import useClick from "./hooks/useClick";

function App() {
  const title = useClick(() => console.log("click"));
  return (
    <div>
      <h1 ref={title}>Hi</h1>
    </div>
  );
}

export default App;
