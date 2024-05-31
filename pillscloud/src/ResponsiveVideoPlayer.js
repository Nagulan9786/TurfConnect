import React from 'react';
import './ResponsiveVideoPlayer.css';
const ResponsiveVideoPlayer = ({ src }) => {
  return (
    <div className="video-container">
      <video autoPlay loop muted className="video">
        <source src={src} type="" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default ResponsiveVideoPlayer;
