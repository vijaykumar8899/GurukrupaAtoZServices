import React from 'react';
import '../styles/difference.css';
import DifferenceContainer from './differenceContainer1';

const Difference = () => {
  return (
    <div className="difference-wrapper">
      <h2 className="our-services-heading">
        What Makes Gurukrupa AtoZ Services Different?
      </h2>
      <DifferenceContainer
        title="Comprehensive Solutions"
        explanation="GurukrupaAtoZ Services offers a one-stop destination for a diverse array of essential services, from insurance and job placement to real estate and digital shopping. This comprehensive approach saves you time and effort by centralizing your needs."
        icon="fas fa-handshake"
      />
      <DifferenceContainer
        title="Expert Guidance"
        explanation="Our team of professionals is highly experienced and dedicated to providing expert guidance in their respective fields. You can trust that you're receiving top-notch advice and support."
        icon="fas fa-users"
      />
      <DifferenceContainer
        title="Diverse Service Range"
        explanation="A-Z Services extends its support beyond the basics. We offer a wide range of services, including food supply consultancy and social, cultural, and spiritual services, making us a versatile and holistic solution for your requirements."
        icon="fas fa-cogs"
      />
      <DifferenceContainer
        title="Positive Impact"
        explanation="A-Z Services is dedicated to making a positive impact on the lives of our customers and the community as a whole. By choosing us, you're contributing to a greater social good."
        icon="fas fa-hands-helping"
      />
      <DifferenceContainer
        title="Trust and Reliability"
        explanation="With a track record of reliability and trustworthiness, A-Z Services is a name you can depend on. We value the trust our customers place in us and strive to exceed their expectations."
        icon="fas fa-lock fa"
      />
      <DifferenceContainer
        title="Customized Solutions"
        explanation="We understand that each individual's needs are unique. A-Z Services offers personalized solutions tailored to your specific requirements, ensuring you get exactly what you need."
        icon="fas fa-puzzle-piece"
      />
      {/* Add more DifferenceContainer components as needed */}
    </div>
  );
};

export default Difference;
