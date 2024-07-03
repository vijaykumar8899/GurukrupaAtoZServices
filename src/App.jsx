import React, { useEffect } from 'react';
import "./App.css";
import Navbar from "./components/navbar";
import AboutUs from "./components/about-us";
import Services from "./components/services";
import Bio from "./components/bio";
import Difference from "./components/difference";
import "@fortawesome/fontawesome-free/css/all.css";
import YoutubeDisplayComponent from "./components/youtubeDisplayComponent";
import ContactMe from "./components/contactMe";
import Black from "./components/black";
import { logEvent } from 'firebase/analytics';
import { analytics } from './Analytics/firebaseConfig';

function App() {

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const source = urlParams.get('utm_source');
    const medium = urlParams.get('utm_medium');
    const campaign = urlParams.get('utm_campaign');

    if (source && medium && campaign) {
      logEvent(analytics, 'campaign_details', {
        source,
        medium,
        campaign,
      });
    }
  }, []);


  return (
    <React.Fragment>
      <Navbar />
      <Services />
      <AboutUs />
      <Difference />
      <Bio />
      <YoutubeDisplayComponent />
      <ContactMe />
      {/* <Black/> */}
    </React.Fragment>
  );
}

export default App;
