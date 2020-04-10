import React from "react";

import Header from "./components/Header";

// <></> denotes a fragment, it's a container but it has no visual feedback
function App() {
  return (
    <>
      <Header title="Homepage">
        <ul>
          <li>First homepage</li>
          <li>Second homepage</li>
        </ul>
      </Header>
      <Header title="Projects">
        <ul>
          <li>Project 1</li>
          <li>Project 2</li>
          <li>Project 3</li>
        </ul>
      </Header>
    </>
  );
}

export default App;
