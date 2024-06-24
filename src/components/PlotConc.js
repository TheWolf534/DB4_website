// PlotTemp.js

import React from 'react';
import Plot from 'react-plotly.js';

function PlotConc({xaxis, yaxis}) {
  return (
    <Plot
      data={[
        {
          x:xaxis, 
          y:yaxis,
          type: 'scatter',
          mode: 'lines+markers',
          marker: {color: 'red'},
       
        },
  
      ]}
      layout={{
        width: 'auto',
        height: 'auto',
        title: 'Concentration vs. Time',
        plot_bgcolor: 'transparent',
        paper_bgcolor: 'transparent',
        uirevision: 'true',
        showgrid: false,

          xaxis: {
            title: 'Time (s)',
            type: 'date',
            showgrid: false,
            zeroline: false
          },
          yaxis: {
            title: 'Concentration (ppm)',
            showline: false
          }
        
      
      }}
      
    />
  );
}

export default PlotConc;
