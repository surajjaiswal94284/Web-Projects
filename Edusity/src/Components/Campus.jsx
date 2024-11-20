import React, { useState } from 'react';
import './Campus.css';
import gallery_1 from '../../assets/gallery-1.png';
import gallery_2 from '../../assets/gallery-2.png';
import gallery_3 from '../../assets/gallery-3.png';
import gallery_4 from '../../assets/gallery-4.png';
import gallery_5 from '../../assets/gallery-5.jpg';
import gallery_6 from '../../assets/gallery-6.jpg';
import gallery_7 from '../../assets/gallery-7.webp';
import gallery_8 from '../../assets/gallery-8.webp';
import white_arrow from '../../assets/white-arrow.png';

const Campus = () => {
  const initialImages = [gallery_1, gallery_2, gallery_3, gallery_4];
  const moreImages = [gallery_5, gallery_6, gallery_7, gallery_8];
  
  const [images, setImages] = useState(initialImages);
  const [showMore, setShowMore] = useState(false);

  const toggleImages = () => {
    if (showMore) {
      setImages(initialImages);
    } else {
      setImages([...initialImages, ...moreImages]);
    }
    setShowMore(!showMore);
  };

  return (
    <div className='campus'>
      <div className="gallery">
        {images.map((src, index) => (
          <img key={index} src={src}/>
        ))}
      </div>
      <button className='btn dark-btn' onClick={toggleImages}>
        {showMore ? 'Show Less' : 'See More Here'} <img src={white_arrow} alt="arrow" />
      </button>
    </div>
  );
};

export default Campus;

