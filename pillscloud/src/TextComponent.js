import React from 'react';
import './TextComponent.css'; // Import CSS for styling

const TextComponent = ({ title, content }) => {
  return (
    <div className="text-container">
      <h1>{title}</h1>
      <p>{content}</p>
    </div>
  );
};

export default TextComponent;
