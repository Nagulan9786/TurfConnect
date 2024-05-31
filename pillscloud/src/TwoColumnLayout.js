import React from 'react';
import './TwoColumnLayout.css'; // Import CSS for styling
import { Link } from 'react-router-dom';
const TwoColumnLayout = ({ heading, paragraph, imageUrl }) => {
  return (
    <div className="container">
      <div className="left-column">
        <h2>{heading}</h2>
        <p>{paragraph}</p>
        <Link to={{ pathname: "/Booking", state: { heading} }}>
          <button>BOOK NOW</button>
        </Link>
      </div>
      <div className="right-column">
        <img src={imageUrl} alt="Illustration" />
      </div>
    </div>
  );
};

export default TwoColumnLayout;
