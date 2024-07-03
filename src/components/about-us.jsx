import React from "react";
import "../styles/abouts-us.css";

// Component for paragraph on the left and image on the right
const TextImageComponent = ({ text, imageSource }) => {
  return (
    <div className="text-image-container">
      <div className="tm-text-content">
        <p>{text}</p>
      </div>
      <div className="tm-image-content">
        <img src={imageSource} alt="tm-Image" />
      </div>
    </div>
  );
};

// Component for image on the left and paragraph on the right
const ImageTextComponent = ({ text, imageSource }) => {
  return (
    <div className="image-text-container">
      <div className="mt-image-content">
        <img src={imageSource} alt="mt-Image" />
      </div>
      <div className="mt-text-content">
        <p>{text}</p>
      </div>
    </div>
  );
};

const MainAboutComponent = ({ text, imageSource }) => {
  return (
    <div className="MainAboutComponent">
      <div className="mainimage-content">
        <img src={imageSource} alt="mainImage" />
      </div>
      <p className="maintext-content">{text}</p>
    </div>
  );
};

const AboutUs = () => {
  return (
    <div id="about-us">
      <h2 className="our-services-heading123">About Us</h2>
      <MainAboutComponent
        text="Welcome to Gurukrupa AtoZ Services, your ultimate destination for a wide range of essential services. Our dedicated team of professionals is always ready to serve you, ensuring that all your needs are met with just one click. Whether you require assistance with insurance, job placement, real estate transactions, or digital shopping, our experts are here to guide you every step of the way. Moreover, beyond the basics, we offer consultancy on food supply and provide a plethora of social, cultural, and spiritual services to cater to all your needs. With A-Z Services, rest assured that expert support is just a click away for all your essential requirements."
        imageSource="/assets/aboutsus1.3.1.png"
      />
      <ImageTextComponent
        text="At A-Z Services, our commitment to excellence is reflected in the numerous success stories and testimonials from satisfied clients. From helping individuals secure their dream job to assisting families in finding their perfect home, we take pride in our ability to make a meaningful difference in people's lives. Our track record of success is a testament to the dedication and expertise of our team, who work tirelessly to ensure client satisfaction. With A-Z Services by your side, you can rest assured that you're in capable hands every step of the way."
        imageSource="/assets/aboutus3.4.png"
      />
      <TextImageComponent
        text="As we continue to expand our offerings and reach new milestones, we remain dedicated to upholding the highest standards of quality and integrity. Our commitment to excellence drives us to continually innovate and adapt to meet the evolving needs of our clients. Whether it's through pioneering new service offerings or leveraging the latest technologies, we are always looking for ways to enhance the value we provide. At A-Z Services, we are not just a service provider; we are your trusted partner in achieving your goals and aspirations."
        imageSource="/assets/aboutus4.png"
      />
      <div className="space"></div>
    </div>
  );
};

export default AboutUs;
