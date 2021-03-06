import React from "react";

// Styles and Components
import "./App.scss";
import Menu from "./Menu/Menu";
import Hero from "./Hero/Hero";
import Work from "./Work/Work";
import About from "./About/About";
import Contact from "./Contact/Contact";
import MenuMobile from "./MenuMobile/MenuMobile";
import WorkContextProvider from "../contexts/WorkContext";

function App() {
  return (
    <div className="App">
      <Menu />
      <MenuMobile />
      <Hero />
      <WorkContextProvider>
        <Work />
      </WorkContextProvider>
      <About />
      <Contact />
    </div>
  );
}

export default App;
