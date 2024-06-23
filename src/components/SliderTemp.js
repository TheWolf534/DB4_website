import React, { useState, useEffect } from 'react';
import { Slider } from 'antd';
import './components.css'; // Import CSS file for custom styling

const TempSlider = () => {
  const [targetTemperature, setTargetTemperature] = useState(0.0);

  useEffect(() => {
    fetchTemperatureData();
    const interval = setInterval(fetchTemperatureData, 5000); // Fetch data every 5 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  async function fetchTemperatureData() {
    try {
      const response = await fetch("http://51.20.235.196:8000/api/board-parameters/1/");
      const data = await response.json();
      setTargetTemperature(data.targetTemperature);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  const handleSliderChange = async (newValue) => {
    setTargetTemperature(newValue);

    // Perform partial update (PATCH request) to backend
    try {
      const response = await fetch("http://51.20.235.196:8000/api/board-parameters/1/", {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          targetTemperature: newValue,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to update target temperature');
      }

      // Optionally, fetch updated data after successful update
      fetchTemperatureData();
    } catch (error) {
      console.error('Error updating target temperature:', error);
    }
  };

  return (
    <>
      <Slider
        value={targetTemperature}
        className="custom-slider"
        trackStyle={{ backgroundColor: 'transparent' }}
        onChange={handleSliderChange}
      />
      <div style={{ marginTop: 10 }}>
        <p>Selected temperature {targetTemperature} °C </p>
      </div>
    </>
  );
};

export default TempSlider;
