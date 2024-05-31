import React from 'react';
import './ResponsiveComponent.css'; // Import CSS file for styling

const ResponsiveComponent = ({ heading, paragraph, imageUrl }) => {
    return (
        <div className="container">
          <div className="right-column">
          <img src={imageUrl} alt="Illustration" />
          </div>
          <div className="left-column">
          <h2>{heading}</h2>
            <p>{paragraph}</p>
            
          </div>
        </div>
    )
};

export default ResponsiveComponent;
