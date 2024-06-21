import React from 'react';
import { Flex, Progress } from 'antd';
import './dashboard.css';
import { useNavigate } from "react-router-dom";

const twoColors = {
  '0%': '#108ee9',
  '100%': '#87d068',
};
const conicColors = {
  '0%': '#87d068',
  '50%': '#ffe58f',
  '100%': '#ff3825',
};

function Dashboard({ type, bool }) {  // if bool(true) add to the browswer url else it goes back. 
  
    const gapSize = 'customize';
    const customGapSize = 200;
    const progressCircleSize = 700;
    const navigate = useNavigate()

    const handleClick = (e) => {
      if (bool==true){
        navigate('/'+type);
      } else {
        navigate('../')
      }
    }

    return (
        <div className="Widget" id={type} onClick={e => handleClick(e)}>  {/* Use className instead of class */}
            <Progress 
                size={progressCircleSize} 
                format={(percent) => percent + "°"} 
                type="circle"  // Ensure the correct type
                percent={30} 
                strokeColor={twoColors} 
            />
            <p className="widgetTitle">Current {type}</p>
        </div>
    );
}

export default Dashboard;  // Capitalize the component name
