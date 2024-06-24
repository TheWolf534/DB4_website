// PlotTemp.js

import React from 'react';
import Plot from 'react-plotly.js';

function PlotErrorTemperature({xaxis,yaxis,thresholdValue}) {
  const formattedXaxis = xaxis.map(val => new Date(val));

  return (
    
    <Plot
      data={[
        {
          x: xaxis,
          y: yaxis,
          type: 'scatter',
          mode: 'lines+markers',
          marker: { color: 'red' },
        },
        {
          x: [formattedXaxis[0], formattedXaxis[formattedXaxis.length - 1]], // Span the entire x-axis range
          y: [thresholdValue, thresholdValue],
          type: 'scatter',
          mode: 'lines',
          line: {
            color: 'blue',
            dash: 'dashdot',
          },
          name: 'Threshold',
        },
      ]}
      layout={{
        width: 'auto',
        height: 'auto',
        title: 'Error rate',
        plot_bgcolor: 'transparent',
        paper_bgcolor: 'transparent',
        font: {
          family: 'Helvetica',
          weight: 'lighter',
        },
        xaxis: {
          title: 'Time (s)',
          showgrid: false,
          zeroline: false,
        },
        yaxis: {
          title: 'Temperature',
          showline: false,
        },
      }}
    />
  );
}

export default PlotErrorTemperature;