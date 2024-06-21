import React, { useState } from 'react';
import { Slider, Switch } from 'antd';
import './components.css'; // Import CSS file for custom styling
import { COLORS, FONT } from '../Constants/theme.js';
import '../styles/sensorPage.css';
const MotorSlider = () => {
  const [disabled, setDisabled] = useState(false);
  const [value, setValue] = useState(30); // State to hold the slider value

  const onChange = (checked) => {
    setDisabled(checked);
  };

  const handleSliderChange = (newValue) => {
    setValue(newValue); // Update the value state when slider value changes
  };

  return (
    <>
      <Slider
        defaultValue={value}
        className="custom-slider" // Apply custom CSS class
        trackStyle={{ backgroundColor: 'transparent' }} // Hide default track background
        onChange={handleSliderChange} // Handle slider value change
      />
      <div style={{ marginTop: 10 }}>
        <p style={FONT.base_16}>Selected motor speed: {value} RPM</p>
      </div>
      <div style={{ flexDirection:'row', alignItems: 'center', marginTop: 10 }}>
        <p style={{ marginRight: 10, ...FONT.base_16 }}>
          <hr></hr>
          Motor direction: {disabled ? 'REVERSE' : 'FORWARD'}
          <p>

        <Switch
          size="large"
          checked={disabled}
          onChange={onChange}
          style={{
            backgroundColor: disabled ? '#F6434A' : '#D9D9D9', // Default color for unchecked state
            color: '#FFF', marginLeft:'20px' // Text color for better readability
          }}
          />
          </p>
       
          </p>
      </div>
    </>
  );
};

export default MotorSlider;
