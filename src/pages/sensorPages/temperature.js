import React, { useEffect, useState }from 'react';
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
            <button onClick={() => navigate('/motor')} className = 'period'> 
                <p  style = {FONT.base_16}>MOTOR </p>
            </button>
            <button onClick={() => navigate('/pid')} className = 'period'> 
                <p  style = {FONT.base_16}>PID </p>
            </button>
    </div>
    
    <div className = "screenContainer" >
        <div className = "period1">
            <p className = "leftscreen">
                <div style= {{padding:30}}>
                     <center>

                    <Progress size={250} format={(percent) => <CustomText percent={percent + "°"}/>} type="dashboard" percent={data.temperature} strokeColor={twoColors} circleTextFontSize = {'1em'} />
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
        
        <div className= 'period1'>

        </div>
        
        <div className = "period1">
            <div className="rightscreen">
                <center>
                    <PlotTemp xaxis={timestampArray} yaxis={temperatureArray} />
                </center>
            </div>
        </div> 
    </div>
    
    </div>  

   )
};


export default Temperature;