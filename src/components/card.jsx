import React from "react";
import "../styles/card.css";
import { motion } from "framer-motion";
import { logEvent } from 'firebase/analytics';
import { analytics } from '../Analytics/firebaseConfig';


const Card = ({ title, description, image, buttonText, link }) => {

  const handleButtonClick = () => {
    const pdfName = `${title} pdf`;

    // Log an event with Firebase Analytics
    logEvent(analytics, 'pdf_open', {
      pdf_name: pdfName
    });
    console.log(pdfName);
    // Open the PDF
    window.open(pdfUrl);
  };


  const pdfUrl =
    "https://firebasestorage.googleapis.com/v0/b/gurukrupa-a-z-services.appspot.com/o/InsuranceConsultancyBroucher.pdf?alt=media&token=4b31c271-b7d3-49c3-ac0a-9be099e45352";
  return (
    <motion.div
      className="card-container"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {title && (
        <motion.h1
          className="card-title"
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
        >
          {title}
        </motion.h1>
      )}
      {image && (
        <motion.img
          src={image}
          alt={title}
          className="card-image"
          initial={{ scale: 0 }}
          animate={{ rotate: 360, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
        />
      )}

      {Array.isArray(description) && description.length > 0 && (
        <motion.ul
          className="card-description"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {description.map((item, index) => (
            <motion.li
              key={index}
              initial={{ x: -10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5 + index * 0.1 }}
            >
              <span>➤</span> {item}
            </motion.li>
          ))}
        </motion.ul>
      )}
      {buttonText && link && (
        <motion.a
          onClick={handleButtonClick}
          className="card-btn"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {buttonText}
        </motion.a>
      )}
    </motion.div>
  );
};

export default Card;
