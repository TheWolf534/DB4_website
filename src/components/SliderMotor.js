import React, { useState, useEffect } from 'react';
import { Slider, Switch } from 'antd';
import './components.css'; // Import CSS file for custom styling
import { FONT } from '../Constants/theme.js'; // Adjust import based on your project structure

const MotorSlider = () => {
  const [disabled, setDisabled] = useState(false);
  const [value, setValue] = useState(30.0); // State to hold the slider value

  useEffect(() => {
    fetchMotorData();
    const interval = setInterval(fetchMotorData, 5000); // Fetch data every 5 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  async function fetchMotorData() {
    try {
      const response = await fetch("http://51.20.235.196:8000/api/board-parameters/1/");
      const data = await response.json();
      setValue(data.targetRPM);
      setDisabled(data.motorDirection === 'REVERSE');
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  const handleSliderChange = async (newValue) => {
    setValue(newValue); // Update the value state when slider value changes

    // Perform partial update (PATCH request) to backend
    try {
      const response = await fetch("http://51.20.235.196:8000/api/board-parameters/1/", {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          targetRPM: newValue
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to update motor parameters');
      }

      // Optionally, fetch updated data after successful update
      fetchMotorData();
    } catch (error) {
      console.error('Error updating motor parameters:', error);
    }
  };

  const handleSwitchChange = async (checked) => {
    setDisabled(checked); // Update the disabled state when switch value changes

    // Perform partial update (PATCH request) to backend
    try {
      const response = await fetch("http://51.20.235.196:8000/api/board-parameters/1/", {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          motorDirection: checked ? 'REVERSE' : 'FORWARD',
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to update motor parameters');
      }

      // Optionally, fetch updated data after successful update
      fetchMotorData();
    } catch (error) {
      console.error('Error updating motor parameters:', error);
    }
  };
  fetchMotorData();
  return (
    <>
      <Slider
        value={value} // Use value instead of defaultValue
        className="custom-slider" // Apply custom CSS class
        trackStyle={{ backgroundColor: 'transparent' }} // Hide default track background
        onChange={handleSliderChange} // Handle slider value change
      />
      <div style={{ marginTop: 10 }}>
        <p style={FONT.base_16}>Selected motor speed: {value} RPM</p>
      </div>
      <div style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
        <p style={{ marginRight: 10, ...FONT.base_16 }}>
          Motor direction: {disabled ? 'REVERSE' : 'FORWARD'}
        </p>
        <Switch
          size="large"
          checked={disabled}
          onChange={handleSwitchChange}
          style={{
            backgroundColor: disabled ? '#F6434A' : '#D9D9D9', // Default color for unchecked state
            color: '#FFF', // Text color for better readability
            marginLeft: '20px'
          }}
        />
      </div>
    </>
  );
};

export default MotorSlider;
