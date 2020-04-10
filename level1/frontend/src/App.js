import React from "react";

import Header from "./components/Header";

// <></> denotes a fragment, it's a container but it has no visual feedback
function App() {
  return (
    <>
      <Header />
      <Header />
    </>
  );
}

export default App;
