import React from "react";
import useNetwork from "./hooks/useNetwork";

function App() {
  const handleNetworkChange = online => {
    console.log(online ? "We just went online" : "We are offline");
  };
  const onLine = useNetwork(handleNetworkChange);
  return <div>{onLine ? "ONLINE" : "OFFLINE"}</div>;
}

export default App;
