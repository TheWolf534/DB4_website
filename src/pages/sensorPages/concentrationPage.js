import React, { useEffect, useState } from 'react';
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
    const [data, setData] = useState([]);
    const [concentrationArray, setConcentrationArray] = useState([]);
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
        const concentrations = list_body.map(item => item.concentration);
        const timestamps = list_body.map(item => {
            // Replace 'T' with space and keep only the date part
            return item.timestamp.replace('T', ' ').split('.')[0];
          });
        setConcentrationArray(concentrations);
        setTimestampArray(timestamps)
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
            <div className = 'selected-period'> 
                <p style = {FONT.base_16}>CONCENTRATION</p>
            </div>
            <button onClick={() => navigate('/motor')} className = 'period'> 
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

                  
                        <Progress size={250} format={(percent) =>  <CustomText percent={percent + "ppm"}/>} type="dashboard" percent={data.concentration} strokeColor={twoColors} style = {FONT.smallInfo_12}/>
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
                     <PlotConc xaxis={timestampArray} yaxis={concentrationArray}/>
                    </center>
                </div>
            </div> 
        </div>
        
        </div>  
    
 
  
       
      

  
   )
};


export default Concentration;