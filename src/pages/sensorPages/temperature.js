import React from 'react';
import {COLORS, FONT} from '../../Constants/theme.js';
import '../../styles/sensorPage.css';
import { Flex, Progress, Slider, Switch} from 'antd';
import {useNavigate} from "react-router-dom";
import  PlotTemp from '../../components/PlotTemp.js';
import TempSlider from '../../components/SliderTemp.js';
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

  
const Temperature = () => {
    const navigate = useNavigate();
   return(
    <div className= "container">
       
    <div className= "periodContainer">
        
        <button onClick={() => navigate('/')} className = 'period'> 
                <p  style = {FONT.base_16}> OVERVIEW </p>
            </button>
            <div className = 'selected-period'> 
                <p style = {FONT.base_16}>TEMPERATURE</p>
            </div>
            <button onClick={() => navigate('/concentration')} className = 'period'> 
                <p  style = {FONT.base_16}> CONCENTRATION</p>
            </button>
            <button onClick={() => navigate('/lightintensity')} className = 'period'> 
                <p  style = {FONT.base_16}> INTENSITY </p>
            </button>
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
                <div style= {{padding:20, alignContent:'center'}}>
                <center>
                    <p style = {FONT.base_16}>ADJUST TEMPERATURE</p>
                    <TempSlider style = {{margin:'20px'}}/>
                        </center>
                    </div>
            </p>
            
        </div>  
        
        <div className= 'period'>

        </div>
        
        <div className = "period">
            <div className="rightscreen">
                <center>
                    <PlotTemp/>
                </center>
            </div>
        </div> 
    </div>
    
    </div>  

   )
};


export default Temperature;