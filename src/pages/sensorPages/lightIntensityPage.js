import React from 'react';
import {COLORS, FONT} from '../../Constants/theme.js';
import '../../styles/sensorPage.css';
import { Flex, Progress } from 'antd';
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
                <p style = {FONT.base_16}>INTENSITY</p>
            </div>

    </div>
    
    <div className = "screenContainer" >
        <div className = "period">
            <p className = "leftscreen">
            <div style= {{padding:30}}>
                     <center>

                    <Progress size={250} format={(percent) => <CustomText percent={percent + "°"}/>} type="dashboard" percent={30} strokeColor={twoColors} circleTextFontSize = {'1em'} />
                    <p style = {FONT.base_16}>CURRENT TEMPERATURE</p>
                    </center>
                </div>
            </p>
            
            <p className = "leftscreen" style={{height: '150px'}}>
                <center>
                    <p style = {FONT.base_16}>ADJUST</p>
                        </center>
                    </p>
        </div>  
        
        <div className= 'period'>
        </div>
        
        <div className = "period">
            <div className="rightscreen">
                <center>
                    <p style = {FONT.bold_20}>DATA inuput here hahhahah long and a lot of stuff takes  alot of space bigtime thing and big time </p>
                </center>
            </div>
        </div> 
    </div>
    
    </div>  

   )
};


export default Intensity;