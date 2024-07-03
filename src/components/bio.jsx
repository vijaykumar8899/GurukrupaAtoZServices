import React from "react";
import "../styles/bio.css";
import AuthorPhoto from "/assets/biofix.png"; // Import the author photo

const Bio = () => {
    return (
        <div className="bio-container">
            <div className="left-half">
                <div className="author-photo">
                    <img src={AuthorPhoto} alt="Author" />
                </div>
            </div>
            <div className="right-half">
                <div className="author-info">
                    <h2 className="author-name">RAVI KIRAN BANALA</h2>
                    <p className="author-description">
                    The person who came up with the idea for GurukrupaAtoZServices is really focused on changing how folks get important things done. They made this cool platform to make things like insurance, finding jobs, buying houses, and shopping online way easier. And it's not just about making money for them - they also do a lot to help out their community and give back to people in need. They're all about spreading good vibes and making the world a better place through GurukrupaAtoZServices.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Bio;
