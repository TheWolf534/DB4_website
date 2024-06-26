
// AnimatedRoutes.js
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Home from './Home/homePage.js';
import Concentration from './sensorPages/concentrationPage.js';
import Temperature from './sensorPages/temperature.js';
import Motor from './sensorPages/motorPage.js';
import PID from  './sensorPages/PIDPage.js';
import PIDTEMP from './sensorPages/PIDPageTemp.js';
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
          <Route path="/motor" element={<Motor/>} />
          <Route path="/pid" element ={<PID/>}/>
          <Route path="/pidTemp" element ={<PIDTEMP/>}/>
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default AnimatedRoutes;
