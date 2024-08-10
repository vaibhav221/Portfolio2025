import React from 'react';
import './All.css';
import './Testimonials.css';
import image1 from './T1.svg';
import image2 from './T2.svg';
import image3 from './T3.svg';
import image4 from './T4.svg';
import image5 from './T5.svg';
import image6 from './T6.svg';
import image7 from './T7.svg';
import image8 from './T8.svg';

const images1 = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
];

const images2 = [
  image8,
  image7,
  image6,
  image5,
  image4,
  image3,
  image2,
  image1,
];

const Testimonials = () => {
  return (
    <div className='testimonialss'>
      <div className="services-left">
        <h1 className="services-title">Client</h1>
        <h2 className="services-heading">Gossip</h2>
        <p className="services-text">Hear what my clients are saying about their experiences!</p>
      </div>
      <div className="testimonial-container">
        <div className="image-scroller-container">
          <div className="scroller-row scroller-row-1">
            {images1.concat(images1).map((image, index) => (
              <img key={index} src={image} alt={`image-${index}`} className="scroller-image2" />
            ))}
          </div>
          <div className="scroller-row scroller-row-2">
            {images2.concat(images2).map((image, index) => (
              <img key={index} src={image} alt={`image-${index}`} className="scroller-image2" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;