import React, { useEffect, useState } from 'react';
import { Flex, Progress } from 'antd';
import {COLORS, FONT} from '../../Constants/theme.js';
import '../../styles/sensorPage.css';
import {useNavigate} from "react-router-dom";


const twoColors = {
  '0%': '#F6454C',
  '50%': '#F5A7AA',
  '100%': '#F6454C',
};
const conicColors = {
  '0%': '#87d068',
  '50%': '#ffe58f',
  '100%': '#ff3825',
  };

//const navigateTo = () => history.push('../sensorPages/temperature');
const CustomText = ({ percent }) => (
  <span style={{ fontSize: '33px', fontWeight: 'lighter', color: '#333', fontFamily:'Helvetica' }}>
      {percent} 
  </span>
);


const MainPage = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
      fetchData();
      const interval = setInterval(fetchData, 5000); // Fetch data every 5 seconds

      return () => clearInterval(interval); // Clear interval on component unmount
    }, []);

    async function fetchData() {
      const result = await fetch("http://51.20.235.196:8000/api/sensor-data/latest");
      const body = await result.json();
      console.log(body[0]);  // Log the first object in the array
      setData(body[0]);  // Set the state with the first object
    }
  
    const navigate = useNavigate();
    const progressCircleSize = 190;

    const headers = {
      "Content-Type": "application/json",
    };
    const url = "http://51.20.235.196:8000/api/sensor-data";
  

    return (
    <div className= "container" >
       
        <div className= "periodContainer">
            <div className = 'selected-period'> 
                <p style = {FONT.base_16}>OVERVIEW</p>
            </div>

            <button onClick={() => navigate('/temperature')} className = 'period'> 
                <p  style = {FONT.base_16}> TEMPERATURE </p>
            </button>
            <button onClick={() => navigate('/concentration')} className = 'period'> 
                <p  style = {FONT.base_16}> CONCENTRATION </p>
            </button>
            <button onClick={() => navigate('/lightintensity')} className = 'period'> 
                <p  style = {FONT.base_16}> MOTOR</p>
            </button>

        </div>
        <div className = "overviewContainer" >
          <div class="period-overview" >
            <center>

            <Progress size={progressCircleSize} format={(percent) => <CustomText percent={percent + "°"}/>} type="dashboard" percent={data.temperature} strokeColor={twoColors} circleTextFontSize = {'1em'} />
            <p style = {FONT.base_16}>CURRENT TEMPERATURE </p>
          </center>
          </div>
          <div class="period-overview">
            <center>
            <Progress size={progressCircleSize} format={(percent) =>  <CustomText percent={percent + "ppm"}/>} type="dashboard" percent={data.concentration} strokeColor={twoColors} style = {FONT.smallInfo_12}/>
            <p style = {FONT.base_16}>ALGEA CONCENTRATION</p>
            </center>
          </div>
      </div>
      <div className = "overviewContainer" >
    <div class = 'period-overview'>
        <center> 
        <Progress size={progressCircleSize} format={(percent) => <CustomText percent={percent + "W"}/>} type="dashboard" percent={30} strokeColor={twoColors} />
        <p style = {FONT.base_16}>POWER</p>
        <p style = {FONT.base_16}>{}</p>
        </center>

     </div>

    <div class = 'period-overview'>
        <center>
        <Progress size={progressCircleSize} format={(percent) => <CustomText percent={percent + "RPM"}/>} type="dashboard" percent={30} strokeColor={twoColors} />
        <p style = {FONT.base_16 }>PUMP SPEED</p>
     </center>
    </div>
        
        </div>
        <div class = 'overviewContainer'></div>
        
      </div>
    )
};


export default MainPage;
