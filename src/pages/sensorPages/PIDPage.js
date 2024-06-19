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
  const [Sparameters, SsetParameters] = useState({
    P: '',
    I: '',
    D: ''
  });
  
  const submit = () => {
    SsetParameters({
      P: parameters.P,
      I: parameters.I,
      D: parameters.D
    });
  };

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
            <center>
              <h1 style={FONT.base_24}>PID</h1>
              <div className="input-group">
                <label style={FONT.base_24}>P</label>
                <input 
                  type="text" 
                  name="P" 
                  value={parameters.P} 
                  onChange={handleInputChange} 
                />
                <p>Current P: {Sparameters.P}</p>
              </div>
              <div className="input-group">
                <label style={FONT.base_24}>I</label>
                <input 
                  type="text" 
                  name="I" 
                  value={parameters.I} 
                  onChange={handleInputChange} 
                />
                <p>Current I: {Sparameters.I}</p>
              </div>
              <div className="input-group">
                <label style={FONT.base_24}>D</label>
                <input 
                  type="text" 
                  name="D" 
                  value={parameters.D} 
                  onChange={handleInputChange} 
                />
                <p>Current D: {Sparameters.D}</p>
                <button onClick={submit} className='period' > 
                <p style={FONT.base_16}>SUBMIT</p>
              </button>
              </div>
            </center>
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
