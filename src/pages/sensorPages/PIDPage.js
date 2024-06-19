// src/PIDPage.js
import React, { useState } from 'react';
import { COLORS, FONT } from '../../Constants/theme.js';
import '../../styles/sensorPage.css';
import { useNavigate } from "react-router-dom";
import PlotTemp from '../../components/PlotTemp.js';
import PID from '../../components/PID.js';





const PIDPage = () => {
  const navigate = useNavigate();
  const [parameters, setParameters] = useState({
    P: '',
    I: '',
    D: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setParameters(prevParams => ({
      ...prevParams,
      [name]: value
    }));
  };

  return (
    <div className="container">
      <div className="periodContainer">
        <button onClick={() => navigate('/')} className='period'> 
          <p style={FONT.base_16}>OVERVIEW</p>
        </button>
        <button onClick={() => navigate('/temperature')} className='period'> 
          <p style={FONT.base_16}>TEMPERATURE</p>
        </button>
        <button onClick={() => navigate('/concentration')} className='period'> 
          <p style={FONT.base_16}>CONCENTRATION</p>
        </button>
        <button onClick={() => navigate('/lightintensity')} className='period'> 
          <p style={FONT.base_16}>MOTOR</p>
        </button>
        <div className='selected-period'> 
          <p style={FONT.base_16}>PID</p>
        </div>
      </div>

      <div className="screenContainer">
        <div className="period1">
          <div className="leftscreen">
           
            <PID/>
          </div>
        </div>

        <div className="period1">
          <div className="rightscreen">
            <center>
              <PlotTemp />
            </center>
          </div>
        </div> 
      </div>
    </div>
  );
};

export default PIDPage;
