// DifferenceContainer.js
import React from 'react';
import PropTypes from 'prop-types';
import '../styles/difference.css';

const DifferenceContainer = ({ title, explanation, icon }) => {
  return (
    <div className="difference-container">
      <div className="explanation">
        <div className="icon">
          <i className={icon}></i>
        </div>
        <div className="text-content">
          <h3>{title}</h3>
          <p>{explanation}</p>
        </div>
      </div>
    </div>
  );
};

DifferenceContainer.propTypes = {
  title: PropTypes.string.isRequired,
  explanation: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default DifferenceContainer;