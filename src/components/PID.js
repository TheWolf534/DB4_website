// src/PIDPage.js
import React, { Component, useState } from 'react';
import { COLORS, FONT } from '../Constants/theme.js';

import { json, useNavigate } from "react-router-dom";

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
<div>
    <center>

              <h1 style={FONT.base_20}>PID</h1>
              <div style= {{padding:'20px'}}>
                <label style={FONT.base_20}>P  </label>
                <input 
                  type="number" 
                  name="P" 
                  value={parameters.P} 
                  onChange={handleInputChange}
                />
                <p>Current P:{Sparameters.P} </p>
              </div>
              <div style= {{padding:'20px'}}>
                <label style={FONT.base_20}>I  </label>
                <input 
                  type="number" 
                  name="I" 
                  value={parameters.I} 
                  onChange={handleInputChange} 
                />
                <p>Current I: {Sparameters.I}</p>
              </div>
              <div style= {{padding:'20px'}}>
                <label style={FONT.base_24}>D  </label>
                <input 
                  type="number" 
                  name="D" 
                  value={parameters.D} 
                  onChange={handleInputChange} 
                />
                <p>Current D: {Sparameters.D}</p>
              </div>
              
              <button onClick={submit} className='period' style={{border: '1px solid black'}}>
                <p style={FONT.base_16}>SUBMIT</p>
              </button>

    </center>
</div>

  );
};

export default PID;
// src/components/PID.js