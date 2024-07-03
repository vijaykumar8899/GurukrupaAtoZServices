import React from "react";
import {
  FaPhone,
  FaWhatsapp,
  FaEnvelope,
  FaInstagram,
  FaFacebook,
  FaYoutube,
} from "react-icons/fa";
import "../styles/contactMe.css";
import { logEvent } from 'firebase/analytics';
import { analytics } from '../Analytics/firebaseConfig';


const ContactMe = () => {

  const handleLinkClick = (Name) => {
    // Log an event with Firebase Analytics
    logEvent(analytics, 'contact_link_open', {
      contact_link_open: Name
    });
    console.log("Name : " + Name);
  };

  return (
    <div id="contact-me-container">
      <h2 className="contactme-heading">Contact Us</h2>
      <div className="contact-methods">
        <div className="contact-card">
          <a
            href="tel:8317688004"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => handleLinkClick("Phone Number")}
          >
            <FaPhone className="icons phone" />
            <span>+91 8317688004</span>
          </a>
        </div>
        <div className="contact-card">
          <a
            href="https://wa.me/918317688004"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => handleLinkClick("Wathsapp link")}
          >
            <FaWhatsapp className="icons whatsapp" />
            <span>+91 8317688004</span>
          </a>
        </div>
        <div className="contact-card">
          <a
            className="single-contactme-link"
            href="mailto:example@example.com"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => handleLinkClick("Email link")}
          >
            <FaEnvelope className="icons email" />
            <span>example@example.com</span>
          </a>
        </div>
        <div className="contact-card">
          <a
            href="https://www.instagram.com/ravikiranbanala/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => handleLinkClick("Insta link")}
          >
            <FaInstagram className="icons instagram" />
            <span>@ravikiranbanala</span>
          </a>
        </div>
        <div className="contact-card">
          <a
            href="https://www.facebook.com/ravikiran.banala.1"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => handleLinkClick("Facebook link")}
          >
            <FaFacebook className="icons facebook" />
            <span>@ravikiran.banala.1</span>
          </a>
        </div>
        <div className="contact-card">
          <a
            className="single-contactme-link"
            href="https://www.youtube.com/@venkataravikrishnabanala8276"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => handleLinkClick("Youtube link")}
          >
            <FaYoutube className="icons youtube" />
            <span>@venkataravikrishnabanala8276</span>
          </a>
        </div>
      </div>

      <div className="additional-info">
        <div className="info-sections">
          <div className="info-section company-description-section">
            <h3 className="about-us-heading">Gurukrupa AtoZ Services</h3>
            <p className="company-description">
              Your comprehensive partner for all essential needs, from expert guidance to everyday solutions.
            </p>
          </div>
          <div className="info-section">
            <h3>Pages</h3>
            <ul>
              <li><a href="/home">Home</a></li>
              <li><a href="/about-us">About Us</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/contact-us">Contact Us</a></li>
            </ul>
          </div>
          <div className="info-section">
            <h3>Services</h3>
            <ul>
              <li><a href="/services/insurance">Insurance</a></li>
              <li><a href="/services/job">Job</a></li>
              <li><a href="/services/realestate">Real Estate</a></li>
              <li><a href="/services/food-supply">Food Supply</a></li>
              <li><a href="/services/spiritual">Spiritual</a></li>
            </ul>
          </div>
          <div className="info-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="/faq">FAQ</a></li>
              <li><a href="/support">Support</a></li>
              <li><a href="/privacy-policy">Privacy Policy</a></li>
              <li><a href="/terms-conditions">Terms & Conditions</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
