import React from "react";
import "./App.css";
import Title from "./components/title";
import Navbar from "./components/navbar";
import OurServices from "./components/our-services";
import AboutUs from "./components/about-us";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Title />
      <OurServices />
      <AboutUs />
    </React.Fragment>
  );
}

export default App;
