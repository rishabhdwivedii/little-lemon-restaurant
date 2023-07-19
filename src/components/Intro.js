import foodImage from '../assets/foodImage.png'
import '../components/Intro.css';
import Reservation from '../components/Reservation';
import React, { useState } from 'react';

function Intro() {
  const [isReservationOpen, setIsReservationOpen] = useState(false);

  const handleReservationClick = () => {
    setIsReservationOpen(true);
  };

  const handleModalClose = () => {
    setIsReservationOpen(false);
  };
    return (
      <div className="intro-container">
        <div className="intro-content">
          <h1>Little Lemon</h1>
          <div className='color-white'>
          <h2>Chicago</h2>
          <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
          </div>
          <button className="button-table" onClick={handleReservationClick}>Reserve a Table</button>
          
      {isReservationOpen && <Reservation onClose={handleModalClose} />}
        </div>
        <img src={foodImage} alt="Food" className="food-image" />
      </div>
           );
    };
    
    export default Intro;