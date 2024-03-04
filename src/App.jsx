import React from "react";
import "./App.css";
import Title from "./components/title";
import Navbar from "./components/navbar";
import OurServices from "./components/our-services";
import AboutUs from "./components/about-us";
import Bio from "./components/bio";
import AtoZDifference from "./components/difference";
import ContactMe from "./components/contactMe";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Title />
      <AboutUs />
      <OurServices />
     
      <Bio />
      <AtoZDifference />
      <ContactMe />
    </React.Fragment>
  );
}

export default App;
