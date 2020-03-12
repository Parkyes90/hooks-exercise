import React from "react";
import useNotification from "./hooks/useNotification";

function App() {
  const fireNotification = useNotification("test", { body: "I Love Kimchi" });
  return (
    <div style={{ height: "1000vh" }}>
      <button onClick={fireNotification}>Notification</button>
    </div>
  );
}

export default App;
