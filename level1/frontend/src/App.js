import React, { useState } from "react";

import "./App.css";

import backgroundImage from "./assets/background.jpg";

import Header from "./components/Header";

// <></> denotes a fragment, it's a container but it has no visual feedback
function App() {
  const [projects, setProjects] = useState([
    "App development",
    "Front-end web",
  ]);

  function handleAddProject() {
    setProjects([...projects, `New project ${Date.now()}`]);
  }

  return (
    <>
      <Header title="Projects" />

      <img width={300} src={backgroundImage} />

      <ul>
        {projects.map((project) => (
          <li key={project}>{project}</li>
        ))}
      </ul>

      <button type="button" onClick={handleAddProject}>
        Add project
      </button>
    </>
  );
}

export default App;
