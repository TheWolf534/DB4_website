// PlotTemp.js

import React from 'react';
import Plot from 'react-plotly.js';

function PlotTemp({xaxis, yaxis}) {
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
          title: 'WATER TEMPERATURE OVER TIME',
          plot_bgcolor: 'transparent',
          paper_bgcolor: 'transparent',
          uirevision: 'true',
          showgrid: false,
          font_family:'Helvetica',
          font_weight:'lighter',
          

            xaxis: {
              title: 'Time (s)',
              type: 'date',
              showgrid: false,
              zeroline: false
            },
            yaxis: {
              title: 'Temperature (°C)',
              showline: false
            }
          
        
        }}
        
      />
    );
}

export default PlotTemp;
