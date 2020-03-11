import React from "react";
import useTitle from "./hooks/useTitle";

function App() {
  const setTitle = useTitle("Loading...");
  return (
    <div>
      <input
        type="text"
        onChange={e => {
          setTitle(e.target.value);
        }}
      />
    </div>
  );
}

export default App;
