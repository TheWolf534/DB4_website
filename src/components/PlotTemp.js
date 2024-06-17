import React from 'react';
import Plot from 'react-plotly.js';
import Papa from 'papaparse';

class PlotTemp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    fetch('./output.csv')
      .then(response => response.text())
      .then(csv => {
        Papa.parse(csv, {
          header: true,
          dynamicTyping: true,
          complete: this.handleData,
        });
      });
  }

  handleData = (result) => {
    const { data } = result;
    const timers = data.map(row => row.timer);
    const temperatures = data.map(row => row.temperature);

    this.setState({
      data: { timers, temperatures },
      loading: false,
    });
  };

  render() {
    const { data, loading } = this.state;

    if (loading) {
      return <div>Loading...</div>;
    }

    return (
      <Plot
        data={[
          {
            x: data.timers,
            y: data.temperatures,
            type: 'scatter',
            mode: 'lines+markers',
            marker: { color: 'red' },
          },
        ]}
        layout={{
          width: 'auto',
          height: 'auto',
          title: 'Temperature vs. Time',
          plot_bgcolor: 'transparent',
          paper_bgcolor: 'transparent',
          showgrid: false,
        }}
      />
    );
  }
}

export default PlotTemp;
