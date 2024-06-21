import React, { useEffect, useState } from 'react';
import {COLORS, FONT} from '../../Constants/theme.js';
import '../../styles/sensorPage.css';
import { Flex, Progress } from 'antd';
import {useNavigate} from "react-router-dom";
import MotorSlider from '../../components/SliderMotor.js';
 
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

  
const Intensity = () => {
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
   return(
    <div className= "container">
       
    <div className= "periodContainer">
        <button onClick={() => navigate('/')} className = 'period'> 
                <p  style = {FONT.base_16}> OVERVIEW </p>
            </button>
            <button onClick={() => navigate('/temperature')} className = 'period'> 
                <p  style = {FONT.base_16}>TEMPERATURE</p>
            </button>
            <button onClick={() => navigate('/concentration')} className = 'period'> 
                <p  style = {FONT.base_16}> CONCENTRATION</p>
            </button>
            <div className = 'selected-period'> 
                <p style = {FONT.base_16}>MOTOR</p>
            </div>
            <button onClick={() => navigate('/pid')} className = 'period'> 
                <p  style = {FONT.base_16}> PID</p>
            </button>
            

    </div>
    
    <div className = "screenContainer" >
        <div className = "period1">
            <p className = "leftscreen">
            <div style= {{padding:30}}>
                     <center>

                    <Progress size={250} format={(percent) => <CustomText percent={percent + "RPM"}/>} type="dashboard" percent={70} strokeColor={twoColors} circleTextFontSize = {'1em'} />
                    <p style = {FONT.base_16}>MOTOR SPEED</p>
                    </center>
                </div>
            </p>
            
         
        </div>
        
        <div className= 'period1'>
        </div>
        
        <div className = "period1">
            <div className="rightscreen" style = {{width:'300px'}}> 
            <div style= {{padding:20, alignContent:'center'}}>
                <center>
                   
                    <MotorSlider style = {{margin:'20px'}}/>
                        </center>
        </div>  
            </div>
        </div> 
    </div>
    
    </div>  

   )
};


export default Intensity;