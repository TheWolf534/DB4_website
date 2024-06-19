// src/PIDPage.js
import React, { useState } from 'react';
import { COLORS, FONT } from '../Constants/theme.js';
import '../styles/sensorPage.css';
import { useNavigate } from "react-router-dom";



const PID = () => {
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
    <div className="screen">
<div className='leftscreen' style = {{padding:'0px', height:'auto',border:'none'}}>
    <center>

              <h1 style={FONT.base_20}>Enter PID values</h1>
              <hr></hr>
            
              <div class="input-container">
  <input 
    type="text" 
    name="P" 
    value={parameters.P} 
    onChange={handleInputChange} 
    class="focus-input" 
    placeholder=" " 
    required
  />
  <label class="input-label">Proportional</label>
</div>
<hr></hr>
              <div class="input-container">
  <input 
    type="text" 
    name="I" 
    value={parameters.I} 
    onChange={handleInputChange} 
    class="focus-input" 
    placeholder=" " 
    required
  />
  <label class="input-label">Integral</label>
</div>
<hr></hr>
<div class="input-container">
  <input 
    type="text" 
    name="D" 
    value={parameters.D} 
    onChange={handleInputChange} 
    className="focus-input" 
    placeholder=" " 
    required
  />
  <label class="input-label">Derivative</label>
</div>
       

              <button onClick={submit} className='period' style={{border: '0.5px solid black', marginTop:'20px'}}>
                <p style={FONT.base_16}>SUBMIT</p>
              </button>
    </center>
</div>
<div className = 'rightscreen' style = {{padding:'20px', height:'auto', border:'none'}}>
    <p style={FONT.base_20}>PID values</p>
<hr></hr>
<center>
<p style={FONT.bold_20}> D =  {Sparameters.D}</p>
<hr></hr>
<p style={FONT.bold_20}>I =  {Sparameters.I}</p>
<hr></hr>
<p style={FONT.bold_20}>P = {Sparameters.P} </p>
</center>
    </div>
</div>
  );
};

export default PID;
// src/components/PID.js