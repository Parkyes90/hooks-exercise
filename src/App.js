import React from "react";
import useConfirm from "./hooks/useConfirm";
import usePreventLeave from "./hooks/usePreventLeave";

function App() {
  const delAction = () => console.log("Del");
  const abort = () => console.log("abort");
  const confirmDel = useConfirm("Are you sure?", delAction, abort);
  const { protect, unprotect } = usePreventLeave();
  return (
    <div>
      <button onClick={confirmDel}>Del</button>
      <button onClick={protect}>Protect</button>
      <button onClick={unprotect}>Unprotect</button>
    </div>
  );
}

export default App;
