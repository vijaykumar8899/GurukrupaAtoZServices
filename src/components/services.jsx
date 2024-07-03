// Services.js
import React from "react";
import "../styles/services.css";
import Card from "../components/card";
import insuranceImage from "/assets/serv17.png"; // Example image import
import jobImage from "/assets/serv3.png";
import jobmage from "/assets/serv2.png";
import realestate from "/assets/serv13.png";
import shopping from "/assets/serv7.png";
import foodsupply from "/assets/serv16.png";
import spirtual from "/assets/serv11.png"; // Example image import
// ... import other images similarly

const Services = () => {
  const additionalInfo = {
    Insurance: {
      description: [
        "Providing new policies.",
        "Service towards old policies.",
        "Claims and loan services.",
        "Nominee and other changes in policies.",
        "Other Life Insurances: Tata, ICICI, BAJAJ.",
        "Vehicles and General Insurances.",

        // ... other items
      ],
      image: insuranceImage,
    },
    Job: {
      description: [
        "Technical Jobs.",
        "Non-Technical Jobs.",
        "Skilled Jobs.",
        "Semi-Skilled Jobs.",
        "Unskilled Jobs.",
        "Part-time Jobs.",
        "Jobs for retired persons.",
        "Jobs for women.",
        // ... other items
      ],
      image: jobImage,
    },
    RealEstate: {
      description: [
        "New open plots.",
        "Apartment plots.",
        "Individual houses.",
        "Old houses.",
        "Re-sale properties.",
        "Rented houses.",
        "Sites for lease.",
      ],
      image: realestate,
    },
    Shopping: {
      description: [
        "Furniture products.",
        "Clothes.",
        "Groceries.",
        "Presentation Articles.",
        "Cosmetic Products.",
        "Herbal Products.",
      ],
      image: shopping,
    },
    FoodSupply: {
      description: [
        "Catering Services.",
        "Meals Supply.",
        "Providing chefs.",
        "Event Management in Food Supply.",
      ],
      image: foodsupply,
    },
    Spiritual: {
      description: [
        "Providing information about social service organizations.",
        "Guidance for social services.",
        "Providing blood donors information.",
        "Providing contacts.",
      ],
      image: spirtual,
    },
    // ... other categories with their images
  };

  return (
    <div className="services" id="services">
      {Object.entries(additionalInfo).map(
        ([title, { description, image }], index) => (
          <Card
            key={index}
            title={title}
            description={description}
            image={image}
            buttonText="Get Brochure"
            link="/https://firebasestorage.googleapis.com/v0/b/gurukrupa-a-z-services.appspot.com/o/InsuranceConsultancyBroucher.pdf?alt=media&token=4b31c271-b7d3-49c3-ac0a-9be099e45352"
          />
        )
      )}
    </div>
  );
};

export default Services;
