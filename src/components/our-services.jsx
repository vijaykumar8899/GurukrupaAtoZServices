import Container from "./container";
import "../Styles/main.css";

function OurServices() {
  return (
    <div>
      <h2 className="our-services-heading">Our Services</h2>
      <div className="our-services-div">
        <div className="container-row">
          <Container title="one" />
          <Container title="two" />
          <Container title="three" />
        </div>
        <div className="container-row">
          <Container title="four" />
          <Container title="five" />
          <Container title="six" />
        </div>
      </div>
      <div className="space"></div>
      <div className="space"></div>
    </div>
  );
}

export default OurServices;
