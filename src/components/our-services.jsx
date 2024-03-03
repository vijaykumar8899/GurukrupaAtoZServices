import Container from "./container";
import "../Styles/main.css";

function OurServices() {
  return (
    <div>
      <h2 className="our-services-heading">Our Services</h2>
      <div className="our-services-div">
        <div className="container-row">
          <Container title="Insurace " image="../assets/img1.png" />
          <Container title="Job" image="../assets/img2.png" />
          <Container title="Real Estate" image="../assets/img3.png" />
        </div>
        <div className="container-row">
          <Container
            title="Shopping"
            image="../assets/img4.png"
            fontSize="25px"
          />
          <Container title="Food Supply" image="../assets/img5.png" />
          <Container
            title="Spirutual"
            image="../assets/img6.png"
            fontSize="25px"
          />
        </div>
      </div>
      <div className="space"></div>
      <div className="space"></div>
    </div>
  );
}

export default OurServices;
