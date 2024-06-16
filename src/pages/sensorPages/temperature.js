import React from 'react';
import {COLORS, FONT} from '../../Constants/theme.js';
import '../../styles/sensorPage.css';
import { Flex, Progress } from 'antd';
import {useNavigate} from "react-router-dom";

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
                        <Progress size={250} format={(percent) => percent + "°"} type="dashboard" percent={30} />
                        <p style = {FONT.bold_20}>Current Concentration</p>
                    </center>
                </div>
            </p>
            
            <p className = "leftscreen" style={{height: '150px'}}>
                <center>
                    <p style = {FONT.bold_20}>Adjust concentration</p>
                        </center>
                    </p>
        </div>  
        
        <div className= 'period'>
            <div className = 'vertical-line'></div>
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


export default Temperature;