import './App.css';
import React, { useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Menu from './components/Menu';
import Testimonial from './components/Testimonial';
import Intro from './components/Intro';
import Reservation from './components/Reservation';
import Footer from './components/Footer';

function App() {
  const [isReservationOpen, setIsReservationOpen] = useState(false);

  const handleReservationClick = () => {
    setIsReservationOpen(true);
  };

  const handleModalClose = () => {
    setIsReservationOpen(false);
  };
  return (
    <>
      <Header />
      <Intro />
      <Menu />
      <Testimonial />
      <button onClick={handleReservationClick}>Reserve a Table</button>

      {isReservationOpen && <Reservation onClose={handleModalClose} />}
      <About />
      <Footer />
    </>
  );
}

export default App;