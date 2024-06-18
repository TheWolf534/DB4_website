import React from 'react';
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