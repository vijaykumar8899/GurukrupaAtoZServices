// YoutubeVideoContainer.jsx
import React from "react";
import "../styles/youtubeVideoContainer.css";
import { logEvent } from 'firebase/analytics';
import { analytics } from '../Analytics/firebaseConfig';


const YoutubeVideoContainer = ({ link = "" }) => {
  const handleYoutubeLinkClick = () => {
    // Log an event with Firebase Analytics
    logEvent(analytics, 'Yt_Link_open', {
      Yt_Link_open: ''
    });
    console.log("Youtube video link event called.")
  };

  return (
    <div className="youtube-container" onClick={handleYoutubeLinkClick}>
      <iframe
        className="youtube-video"
        src={link}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default YoutubeVideoContainer;
