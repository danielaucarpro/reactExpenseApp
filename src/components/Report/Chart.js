import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Spent', 'Earned'],
  datasets: [
    {
      label: '# of Votes',
      data: [2424, 5820],
      borderColor: [
        'rgba(65, 110, 238, 0.5 )',
        'rgba(255, 187, 86, 0.5 )',
      ],
      backgroundColor: [
        'rgba(65, 110, 238, 0.8)',
        'rgba(255, 187, 86, 0.8)',
      ],
      borderWidth: 1,
      bordershadow: 1,
    },
  ],
};

export function Chart () {
  return <Doughnut data={data} />;
}
