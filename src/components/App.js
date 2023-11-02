import React from "react";
import NavBar from "./NavBar";
import GifListContainer from "./GifListContainer"; // Import GifListContainer

function App() {
  return (
    <div>
      <NavBar color="black" title="Giphy Search" />
      <GifListContainer /> {/* Render the GifListContainer component */}
    </div>
  );
}

export default App;
