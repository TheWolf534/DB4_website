// PlotTemp.js

import React from 'react';
import Plot from 'react-plotly.js';

class PlotTemp extends React.Component {
  render() {
    return (
      <Plot
        data={[
          {
            x: [1, 2, 3],
            y: [2, 6, 3],
            type: 'scatter',
            mode: 'lines+markers',
            marker: {color: 'red'},
          },
    
        ]}
        layout={ {width: 'auto', height: 'auto', title: 'A Fancy Plot', plot_bgcolor: 'transparent', // Set background color to transparent
        paper_bgcolor: 'transparent', // Set paper (plot area) background color to transparent
        showgrid: false, }}// Hide gridlines}
      />
    );
  }
}

export default PlotTemp;
