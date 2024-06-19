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
        <center><p style={FONT.base_20}>PID values</p></center>
      <div className= 'pidcontainer'>
      <div className= 'pid'>
          <center>
      <p style={FONT.smallInfo_12}> P</p>
      <p style={FONT.bold_20}>  {Sparameters.P}</p>
      </center>
      </div>
      
      <div className= 'pid'>
          <center>
      
      <p style={FONT.smallInfo_12}> I</p>
      <p style={FONT.bold_20}>  {Sparameters.I}</p>
          </center>
      </div>
      <div className= 'pid' style={{borderRight:'none'}}>
          <center>
      
      <p style={FONT.smallInfo_12}> D</p>
      <p style={FONT.bold_20}>  {Sparameters.D}</p>
          </center>
      </div>
      </div>
<div className='leftscreen' style = {{paddingTop:'20px', height:'auto',border:'none'}}>
    <center>
    <div style={{paddingBottom:'0px'}}>

              <h1 style={FONT.base_20}>Enter new values</h1>
    </div>
            
            
              <div class="input-container" >
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
<div>


    

  



</div>


  
</div>
  );
};

export default PID;
// src/components/PID.js