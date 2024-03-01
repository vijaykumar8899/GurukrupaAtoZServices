import React from "react";
import "./App.css";
import Title from "./components/title";
import Navbar from "./components/navbar";
import OurServices from "./components/our-services";
function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Title />
      <OurServices />
    </React.Fragment>
  );
}

export default App;
