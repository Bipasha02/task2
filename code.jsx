// components/MonthlyCollectionChart.js
import React from 'react';
import { Line } from 'react-chartjs-2';

const MonthlyCollectionChart = ({ data }) => {
  const months = data.monthlyCollection.map(item => item.month);
  const amounts = data.monthlyCollection.map(item => item.amount);

  const chartData = {
    labels: months,
    datasets: [
      {
        label: 'Monthly Collection',
        data: amounts,
        fill: false,
        borderColor: 'rgba(75, 192, 192, 1)',
      },
    ],
  };

  return (
    <div>
      <Line data={chartData} />
    </div>
  );
};

export default MonthlyCollectionChart;
