import React from 'react';
import { Flex, Progress } from 'antd';
import './homePageStyle.css';

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
const mainPage = () => {
    const data = Array.from({length: 101}, (_, i) => `${i}%`);
    const gapSize = 'customize';
    const customGapSize = 200;
    const progressCircleSize = 700;
    return (
      <Flex gap={gapSize !== 'customize' ? gapSize : customGapSize}>
      <div>
        <Progress size={progressCircleSize} format={(percent) => percent + "°"} type="dashboard" percent={30} strokeColor={twoColors} />
        <p className="title">Current Temperatur</p>
      </div>
      <div>
        <Progress size={progressCircleSize} format={(percent) => percent + "mol/dm3"} type="dashboard" percent={30} strokeColor={twoColors} />
        <p className="title">Alge concentration</p>
      </div>
      <div>
        <Progress size={progressCircleSize} format={(percent) => percent + "W"} type="dashboard" percent={30} strokeColor={twoColors} />
        <p className="title">Power</p>
      </div>
      <div>
        <Progress size={progressCircleSize} format={(percent) => percent + "RPM"} type="dashboard" percent={30} strokeColor={twoColors} />
        <p className="title">Pump Speed</p>
      </div>
    </Flex>
    )
};


export default mainPage;