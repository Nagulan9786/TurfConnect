import React from 'react'
import TwoColumnLayout from './TwoColumnLayout'
import './Product.css'
function Product() {
  return (
    <div>
      <container>
      <TwoColumnLayout
        heading="CRICKET SESSION"
        paragraph="A timeless dance between bat and ball, weaving tales of skill, strategy, and unyielding passion on the green fields."
        image
        imageUrl="https://www.dugoutchennai.com/wp-content/uploads/2022/12/dogout-cricket.webp"
      />
      <div style={{ marginBottom: '100px' }}></div>
      <TwoColumnLayout
        heading="FOOTBALL SESSION"
        paragraph="Playing football on the turf is an exhilarating experience that combines the thrill of the sport with the smooth, consistent surface provided by artificial turf. "
        imageUrl="https://previews.123rf.com/images/koonsiri/koonsiri1811/koonsiri181100220/112483355-ball-on-green-artificial-turf-at-corner-of-football-field-with-blurry-players-are-training.jpg"
      />
       <div style={{ marginBottom: '100px' }}></div>
       <TwoColumnLayout
        heading="HOCKEY SESSION"
        paragraph="As the match begins, the intensity rises. The ball dances across the turf, propelled by skillful flicks and precise passes. Every stride feels purposeful, every swing of the stick calculated. With each play, the turf becomes our ally, providing a consistent surface for swift maneuvers and decisive actions."
        imageUrl="https://ekipgrass.net/wp-content/uploads/2022/09/hockey-grass.jpg"
      />
      </container>
    </div>
  )
}

export default Product
