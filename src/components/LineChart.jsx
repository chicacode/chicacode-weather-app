// import { Doughnut } from 'react-chartjs-2';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';

const LineChart = ( { chartDarta, options } ) => {
    console.log("linechart data", chartDarta)
  return <Line data={chartDarta} options={options} />;
  
}

export default LineChart;