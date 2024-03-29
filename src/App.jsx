import React, { Suspense, lazy } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import ScrollUpButton from "./components/scroll-up-button";

// Lazy load other components
const Title = lazy(() => import("./components/title"));
const OurServices = lazy(() => import("./components/our-services"));
const AboutUs = lazy(() => import("./components/about-us"));
const Bio = lazy(() => import("./components/bio"));
const AtoZDifference = lazy(() => import("./components/difference"));
const ContactMe = lazy(() => import("./components/contactMe"));
const Splash = lazy(() => import("./components/splash"));
const YoutubeDisplayComponent = lazy(() =>
  import("./components/youtubeDisplayComponent")
);

function App() {
  return (
    <React.Fragment>
      <Navbar />

      <Suspense fallback={<div>Loading...</div>}>
        <Title />
        <AboutUs />

        <OurServices />
        <Bio />
        <div className="space"></div>
        <AtoZDifference />
        <YoutubeDisplayComponent />
        <ScrollUpButton />
        <ContactMe />
      </Suspense>
    </React.Fragment>
  );
}

export default App;
