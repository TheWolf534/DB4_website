import React from 'react';
import { Flex, Progress } from 'antd';
import './temperature.css';
import Dashboard from '../Home/dashboard';

const twoColors = {
  '0%': '#108ee9',
  '100%': '#87d068',
};
const conicColors = {
  '0%': '#87d068',
  '50%': '#ffe58f',
  '100%': '#ff3825',
};

const value = 0.66;
const TemperaturePage = () => {
    const gapSize = 'customize';
    const customGapSize = 200;
    const progressCircleSize = 700;
    return (
        <Dashboard type = "temperature" />

    )
};


export default TemperaturePage;