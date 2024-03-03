import React from "react";
import "../Styles/bio.css";

const Bio = () => {
  return (
    <div className="bio">
      <div className="row">
        <div className="imgWrapper">
          <img src="assets\ravikiranimage1.jpg" alt="bio-img-ravikiran-garu" />
        </div>
        <div className="contentWrapper">
          <div className="content">
            {/* <span className="textWrapper">
              <span>Ravi Kiran Banala</span>
            </span> */}
            <h2>Ravi Kiran Banala</h2>
            <p>
              The visionary behind <strong>GurukrupaAtoZServices</strong>, is
              dedicated to transforming how people access essential services.
              They founded this innovative platform to streamline insurance, job
              placement, real estate, and digital shopping solutions. Beyond
              business, he is known for community service and philanthropy,
              driving GurukrupaAtoZServices' mission to make a positivity.
            </p>
            <a href="#">Contact</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bio;
