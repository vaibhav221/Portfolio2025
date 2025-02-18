import React, { useState } from 'react';
import './All.css';
import './OurProject.css';
import P2 from './ikansh.svg';
import KuberX from './KX.jpg';
import './Maincomponent.css';
import { Link } from 'react-router-dom';
import './AllMobileview.css';
import P1 from './P1.gif';
import p3 from './Kuberx_f.gif';
import ef from './ef.jpg';
import p4 from './Ikansh.png';
import p5 from "./PayCC.jpg"
import cc from "./CC.png"

// Importing the new images based on the provided image


const Ourprojects = () => {
  // State to manage the popup visibility and image source
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupImage, setPopupImage] = useState('');

  // Function to toggle the popup with the correct image
  const togglePopup = (image) => {
    setPopupImage(image);
    setIsPopupOpen(!isPopupOpen);
  };

  // Data for each card, including unique images for both display and popup
  const cardData = [
    {
      src: p3,  // Image for card display
      popupImage: KuberX, // Image for popup
      alt: "First Project",
      title: "KuberX App",
      time: "Innovating business solutions through dynamic app design."
    },
    {
      src: P1,  // Image for card display
      popupImage: ef, // Image for popup
      alt: "Second Project",
      title: "Electrifuel",
      time: "Enhancing user interaction with streamlined technological experiences."
    },
    {
      src: cc,  // Image for card display
      popupImage: p5, // Image for popup
      alt: "Third Project",
      title: "Ikaansh",
      time: "Crafting visual stories that elevate brand presence."
    }
  ];

  return (
    <div id="project-App">
      <div className="gallery-container">
        <h1 className="title">My Projects</h1>
        <div className='title_p'>Check out my recent work!</div>
      </div>
      <div className='Pcard'>
        {cardData.map((card, index) => (
          <a href="#" key={index} className="card" onClick={() => togglePopup(card.popupImage)}>
            <img src={card.src} alt={card.alt} className="card__img" />
            <span className="card__footer">
              <span>{card.title}</span>
              <span>{card.time}</span>
            </span>
            <span className="card__action">
              <svg viewBox="0 0 448 512" title="play">
                <path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z" />
              </svg>
            </span>
          </a>
        ))}
      </div>

      {/* Popup */}
      {isPopupOpen && (
        <div className="popup-overlay">
          <div className="popup-content">
            <img src={popupImage} alt="Project Image" className="popup-image" />
            <button onClick={() => togglePopup('')} className="close-button">X</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Ourprojects;