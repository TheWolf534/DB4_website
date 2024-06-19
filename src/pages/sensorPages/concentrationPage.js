import React from 'react';
import {COLORS, FONT} from '../../Constants/theme.js';
import { Flex, Progress } from 'antd';
import '../../styles/sensorPage.css';
import {useNavigate} from "react-router-dom";
import  PlotConc from '../../components/PlotConc.js';

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
  
const Concentration = () => {
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
            <div className = 'selected-period'> 
                <p style = {FONT.base_16}>CONCENTRATION</p>
            </div>
            <button onClick={() => navigate('/lightintensity')} className = 'period'> 
                <p  style = {FONT.base_16}>MOTOR </p>
            </button>
            <button onClick={() => navigate('/pid')} className = 'period'> 
                <p  style = {FONT.base_16}> PID</p>
            </button>

        </div>
        
        <div className = "screenContainer" >
            <div className = "period1">
                <p className = "leftscreen">
                <div style= {{padding:30}}>
                     <center>

                  
                        <Progress size={250} format={(percent) =>  <CustomText percent={percent + "mol/dm³"}/>} type="dashboard" percent={30} strokeColor={twoColors} style = {FONT.smallInfo_12}/>
                        <p style = {FONT.base_16}>ALGEA CONCENTRATION</p>
            
                    </center>
                </div>
                </p>
                
             
            </div>  
            
            <div className= 'period1'>
            </div>
            
            <div className = "period1">
                <div className="rightscreen">
                    <center>
                    <p style = {FONT.base_16}>MOTOR ADJUSTMENTS</p>
                     <PlotConc/>
                    </center>
                </div>
            </div> 
        </div>
        
        </div>  
    
 
  
       
      

  
   )
};


export default Concentration;