
// AnimatedRoutes.js
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Home from './Home/homePage.js';
import Concentration from './sensorPages/concentrationPage.js';
import Temperature from './sensorPages/temperature.js';
import Intensity from './sensorPages/lightIntensityPage.js';
import '../styles/transitionStyles.css'; // Import the CSS for animations

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <TransitionGroup>
      <CSSTransition key={location.key} classNames="fade" timeout={300}>
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/concentration" element={<Concentration/>} />
          <Route path="/temperature" element={<Temperature/>} />
          <Route path="/lightintensity" element={<Intensity/>} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default AnimatedRoutes;
