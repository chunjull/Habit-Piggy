import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },
  scales: {
    y: {
      max: 200,
      beginAtZero: true,
      grid: {
        color: 'transparent',
        borderColor: 'black',
        tickColor: 'black',
        },
    },
    x: {
      grid: {
        color: 'transparent',
        borderColor: 'black',
        tickColor: 'black',
        },
      },
    },
  };



const BarChart = ({weeks, expenses, isEvenWeek}) => {

  const data = {
    labels: weeks.map((week) => `week${week}`),
    datasets: [
      {
        data: expenses,
        backgroundColor: weeks.map((week, index) => isEvenWeek[index] ? 'rgb(255,199,0)' : 'rgb(0,105,120)'),
        categoryPercentage: 0.6,
      },
    ],
  };

  return <Bar options={options} data={data} />;
}

export default BarChart;