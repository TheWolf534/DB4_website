import React, { useEffect, useState }from 'react';
import { COLORS, FONT } from "../../Constants/theme.js";
import "../../styles/sensorPage.css";
import { useNavigate } from "react-router-dom";
import PlotError from "../../components/PlotError.js";
import PID from "../../components/PID.js";

const thresholdValue = 23;
const PIDPageTemp = () => {
  const navigate = useNavigate();

  const [data, setData] = useState([]);
  const [temperatureArray, setTemperatureArray] = useState([]);
  const [timestampArray, setTimestampArray] = useState([]);

  useEffect(() => {
      fetchData();
      const interval = setInterval(fetchData, 5000); // Fetch data every 5 seconds

      return () => clearInterval(interval); // Clear interval on component unmount
    }, []);

  async function fetchData() {
      const latest_result = await fetch("http://51.20.235.196:8000/api/sensor-data/latest");
      const latest_body = await latest_result.json();
      setData(latest_body[0]);  // Set the state with the fetched data

      const list_result = await fetch("http://51.20.235.196:8000/api/sensor-data/");
      const list_body = await list_result.json();
      const temperatures = list_body.map(item => item.temperature);
      const timestamps = list_body.map(item => {
          // Replace 'T' with space and keep only the date part
          return item.timestamp.replace('T', ' ').split('.')[0];
        });
      console.log(temperatures);
      console.log(timestamps)
      setTemperatureArray(temperatures);
      setTimestampArray(timestamps)
  }

  return (
    <div className="container">
      <div className="periodContainer">
        <button onClick={() => navigate("/")} className="period">
          <p style={FONT.base_16}>OVERVIEW</p>
        </button>
        <button onClick={() => navigate("/temperature")} className="period">
          <p style={FONT.base_16}>TEMPERATURE</p>
        </button>
        <button onClick={() => navigate("/concentration")} className="period">
          <p style={FONT.base_16}>CONCENTRATION</p>
        </button>
        <button onClick={() => navigate("/motor")} className="period">
          <p style={FONT.base_16}>MOTOR</p>
        </button>
        <button onClick={() => navigate("/pid")} className="period">
          <p style={FONT.base_16}>PID</p>
        </button>
        <div className="selected-period">
          <p style={FONT.base_16}>PID_TEMP</p>
        </div>
      </div>

      <div className="screenContainer">
        <div className="period1">
          <PID />
        </div>

        <div className="period1">
          <div className="rightscreen">
            <center>
            <PlotErrorTemperature xaxis={timestampArray} yaxis={temperatureArray} thresholdValue={thresholdValue} />
            </center>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PIDPageTemp;
