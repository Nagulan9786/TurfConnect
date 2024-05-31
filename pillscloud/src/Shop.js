import React from 'react';
import ResponsiveVideoPlayer from './ResponsiveVideoPlayer';
import TextComponent from './TextComponent';
import TwoColumnLayout from './TwoColumnLayout';
import Footer from './Footer';
const Shop = () => {
  return (
    <div>
      <ResponsiveVideoPlayer src="https://videos.pexels.com/video-files/6077710/6077710-uhd_3840_2160_25fps.mp4" />
      <TextComponent title="Streamline your game time with our hassle-where every play is just a tap away!" content="In every real man, a child is hidden that wants to play. - Friedrich Nietzsche"/>
      <TwoColumnLayout
        heading="CRICKET SESSION-BESTBOOKING"
        paragraph="A timeless dance between bat and ball, weaving tales of skill, strategy, and unyielding passion on the green fields."
        imageUrl="https://www.dugoutchennai.com/wp-content/uploads/2022/12/dogout-cricket.webp"
      />
       <div style={{ marginBottom: '50px' }}></div>
      <Footer/>
    </div>
  );
}

export default Shop;