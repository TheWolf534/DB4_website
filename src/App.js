import React from 'react';
import Home from './pages/Home/homePage.js';
import Concentration from './pages/Concentration/concentrationPage.js';
import Temperature from './pages/Temperature/lightIntensityPage.js';
import Power from './pages/Power/powerPage.js';
import PumpSpeed from './pages/PumpSpeed/pumpSpeedPage.js';
import LightIntensity from './pages/LightIntensity/lightIntensityPage.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";


const value = 0.66;
const App = () => {
  return(
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
    
};


export default App;