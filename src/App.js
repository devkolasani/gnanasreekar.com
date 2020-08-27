import React from "react";
import "./App.css";

//Components
import Menu from "./components/Menu/Menu";
import Hero from "./components/Hero/Hero";

function App() {
  return (
    <React.Fragment>
      <Menu />
      <Hero />
    </React.Fragment>
  );
}

export default App;
