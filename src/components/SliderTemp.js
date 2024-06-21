import React, { useState } from 'react';
import { Slider, Switch } from 'antd';
import './components.css'; // Import CSS file for custom styling
import {COLORS, FONT} from '../Constants/theme.js';

const TempSlider = () => {
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
        disabled={disabled}
        className="custom-slider" // Apply custom CSS class
        trackStyle={{ backgroundColor: 'transparent' }} // Hide default track background
        onChange={handleSliderChange} // Handle slider value change
      />
      <div style={{ marginTop: 10 }}>
        <p style={FONT.base_16}>Selected temperature {value} °C </p>
      </div>
    </>
  );
};

export default TempSlider;
