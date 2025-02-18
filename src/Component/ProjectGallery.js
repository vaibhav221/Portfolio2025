import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './All.css';
import './ProjectGallery.css';
import Navbar from './Navbar';
import star from './star.svg';
import Footer from './Footer.js';
import P1 from './P1.gif';
import p3 from './Kuberx_f.gif';
import ef from './ef.jpg';
import p4 from './Ikansh.png';
import p5 from "./PayCC.jpg"
import cc from "./CC.png";
import P2 from './ikansh.svg';
import KuberX from './KX.jpg';
import commingsoon from "./Coomingsoon.gif"

import Contactpage from './ContactPage';



const Card = ({ title, date, duration, image, buttons, link, popupImage, onImageClick }) => (
  <div className="cardd" onClick={() => onImageClick(popupImage)}>
    <img src={image} alt={title} className="cardd-image" />
    <div className="cardd-content">
    <p>{date}</p>
      <h3>{title}</h3>
      <div className="project1-button-row">
        {buttons.map((button, index) => (
          <button 
            key={index} 
            style={button.style}
          >
            {button.label}
          </button>
        ))}
      </div>
      
      {duration && <p>{duration}</p>}
    </div>
    {/* <button className="play-button">▶</button> */}
  </div>
);

const ProjectGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const projects = [
    {
      title: "Innovating company Business report Solution ",
      date: "Company : Credflow",
      image: p3,
      popupImage: KuberX, // Image for the pop-up
      buttons: [
  
        {
          label: "Product Design",
          style: {
            backgroundColor: 'rgb(2 110 58)',
            color: 'white',
            padding: '8px 16px',
            borderRadius: '20px',
            border: 'none',
            margin: '0 5px 5px 0'
          }
        },
        {
          label: "Web/App Design",
          style: {
            backgroundColor: 'rgb(2 110 58)',
            color: 'white',
            padding: '8px 16px',
            borderRadius: '20px',
            border: 'none',
            margin: '0 5px 5px 0'
          }
        }
      ],
    },
    {
      title: "Flexible business payments, Pay Via Credit Card feature",
      date: "Company : Credflow",
      image: cc,
      popupImage: p5, // Image for the pop-up
      buttons: [

        {
          label: "App Design",
          style: {
            backgroundColor: '#9676ff',
            color: 'white',
            padding: '8px 16px',
            borderRadius: '20px',
            border: 'none',
            margin: '0 5px 5px 0'
          }
        },
        {
          label: "User Reaserch",
          style: {
            backgroundColor: '#9676ff',
            color: 'white',
            padding: '8px 16px',
            borderRadius: '20px',
            border: 'none',
            margin: '0 5px 5px 0'
          }
        }
      ],
    },
    {
     
      title: "I enhanced ELECTRIFUEL's brand & digital presence.",
      date: "Client : Electrifuel",
      image: P1,
      popupImage: ef, // Image for the pop-up
      buttons: [

        {
          label: "Brand Design",
          style: {
            backgroundColor: 'rgb(188 53 3)',
            color: 'white',
            padding: '8px 16px',
            borderRadius: '20px',
            border: 'none',
            margin: '0 5px 5px 0'
          }
        },
        {
          label: "Web Designing",
          style: {
            backgroundColor: 'rgb(188 53 3)',
            color: 'white',
            padding: '8px 16px',
            borderRadius: '20px',
            border: 'none',
            margin: '0 5px 5px 0'
          }
        }
      ],
    },
  ];

  const projects2 = [
    {
      title: "Creating a brand identity for the startup ikaansh",
      date: "Client : IKAANSH",
      image: p4,
      popupImage: P2, // Image for the pop-up
      buttons: [
  
        {
          label: "Brand Identity",
          style: {
            backgroundColor: 'rgb(2 110 58)',
            color: 'white',
            padding: '8px 16px',
            borderRadius: '20px',
            border: 'none',
            margin: '0 5px 5px 0'
          }
        },
        {
          label: "Marketing",
          style: {
            backgroundColor: 'rgb(2 110 58)',
            color: 'white',
            padding: '8px 16px',
            borderRadius: '20px',
            border: 'none',
            margin: '0 5px 5px 0'
          }
        }
      ],
    },
    {
      title: "--",
      date: "--",
      image: commingsoon,
      popupImage: "", // Image for the pop-up
      buttons: [

        {
          label: "--",
          style: {
            backgroundColor: '#9676ff',
            color: 'white',
            padding: '8px 16px',
            borderRadius: '20px',
            border: 'none',
            margin: '0 5px 5px 0'
          }
        },
        {
          label: "--",
          style: {
            backgroundColor: '#9676ff',
            color: 'white',
            padding: '8px 16px',
            borderRadius: '20px',
            border: 'none',
            margin: '0 5px 5px 0'
          }
        }
      ],
    },
    {
      title: "--",
      date: "--",
      image: commingsoon,
      popupImage:"", // Image for the pop-up
      buttons: [

        {
          label: "--",
          style: {
            backgroundColor: 'rgb(188 53 3)',
            color: 'white',
            padding: '8px 16px',
            borderRadius: '20px',
            border: 'none',
            margin: '0 5px 5px 0'
          }
        },
        {
          label: "--",
          style: {
            backgroundColor: 'rgb(188 53 3)',
            color: 'white',
            padding: '8px 16px',
            borderRadius: '20px',
            border: 'none',
            margin: '0 5px 5px 0'
          }
        }
      ],
    },
  ];
  

  return (
    <div id="project-gallery">
      <Navbar/>
      <div className="contactpageanimation-container-pg">
        <div className="contactpageanimation-div1-p">
          <div className="contactpageanimation-text">
            <img src={star} alt="star" />
            Featured &nbsp;<img src={star} alt="star" /> Featured &nbsp;<img src={star} alt="star" /> Featured &nbsp;<img src={star} alt="star" /> Featured &nbsp;<img src={star} alt="star" /> Featured &nbsp;<img src={star} alt="star" /> Featured &nbsp;<img src={star} alt="star" /> Featured &nbsp;<img src={star} alt="star" /> Featured &nbsp;<img src={star} alt="star" /> Featured &nbsp;<img src={star} alt="star" /> Featured &nbsp;<img src={star} alt="star" /> Featured &nbsp;<img src={star} alt="star" /> Featured &nbsp;<img src={star} alt="star" /> Featured &nbsp;<img src={star} alt="star" /> Featured &nbsp;<img src={star} alt="star" /> Featured 
          </div>
        </div>
      </div>
      <div className="contactpage-content">
        <div className="contactpage-left-section">
          <h1 style={{ fontSize: '44px' }}>Project <span className='subtitle-pg'>Gallery</span></h1>
          <p style={{ fontSize: '16px', fontFamily:'Poppins' , fontWeight:"400", lineHeight:"32px"}}>A Comprehensive Showcase of My Most Impactful Projects</p>
        </div>
      </div>
      <div className="project-gallery-card">
        {projects.map((project, index) => (
          <Card key={index} {...project} onImageClick={setSelectedImage} />
        ))}
      </div>
      <div className="project-gallery-card">
        {projects2.map((project, index) => (
          <Card key={index} {...project} onImageClick={setSelectedImage} />
        ))}
      </div>
      <Contactpage />
      <div><Footer /></div>

      {selectedImage && (
        <div className="popup-overlay" onClick={() => setSelectedImage(null)}>
          <div className="popup-content" onClick={e => e.stopPropagation()}>
            <img src={selectedImage} alt="Selected" className="popup-image" />
            <button className="close-button" onClick={() => setSelectedImage(null)}>×</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProjectGallery;
