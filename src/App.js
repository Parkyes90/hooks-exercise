import React from "react";
import useAxios, { createClient } from "./hooks/useAxios";
const client = createClient({
  url: "https://yts.mx/api/v2/list_movies.json"
});
function App() {
  console.log(client);
  const { loading, data, error, refetch } = useAxios(client);
  console.log(loading, data, error);
  return (
    <div style={{ height: "1000vh" }}>
      <button onClick={refetch}>refetch</button>
    </div>
  );
}

export default App;
