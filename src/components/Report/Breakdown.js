import React, { useContext, useState, useEffect } from 'react';
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { PolarArea } from 'react-chartjs-2';
import { GlobalContext } from "../ContextAPI/GlobalState";

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Dribble', 'Netflix', 'Skillshare', 'Spotify', 'Sketch', 'Ivnision'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.5)',
        'rgba(54, 162, 235, 0.5)',
        'rgba(255, 206, 86, 0.5)',
        'rgba(75, 192, 192, 0.5)',
        'rgba(153, 102, 255, 0.5)',
        'rgba(255, 159, 64, 0.5)',
      ],
      borderWidth: 1,
    },
  ],
};



export function Breakdown() {

  const data = {
    labels: ['Groceries', 'Food', 'Entertainment', 'Travel', 'Bill', 'Fuel'],
    datasets: [
      {
        label: 'Number of expenses',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 206, 86, 0.5)',
          'rgba(75, 192, 192, 0.5)',
          'rgba(153, 102, 255, 0.5)',
          'rgba(255, 159, 64, 0.5)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const { history } = useContext(GlobalContext);
  console.log(history);
  // const [expense, setExpense] = useState([]);

  // useEffect(() => {
  //   const expense = history.filter((data) => data.amount < 0);
  //   let mainData = { label: expense.map((data) => data.name)};
  //   mainData.datasets = [
  //     {
  //       label: "# of Votes",
  //       data:[25, 6, 2, 7, 8, 24], //??
  //       backgroundColor: [
  //         'rgba(255, 99, 132, 0.5)',
  //         'rgba(54, 162, 235, 0.5)',
  //         'rgba(255, 206, 86, 0.5)',
  //         'rgba(75, 192, 192, 0.5)',
  //         'rgba(153, 102, 255, 0.5)',
  //         'rgba(255, 159, 64, 0.5)',
  //       ],
  //       borderWidth: 1
  //     }
  //   ]
  //   console.log(mainData, "Data");
  //   setExpense(mainData);
  //   console.log(expense, 'expense');

  // }, [history])

  return <PolarArea data={data} />;
}

// function getRandomColor() {
//   var letters = '0123456789ABCDEF'.split('');
//   var color = '#';
//   for (var i = 0; i < 6; i++ ) {
//       color += letters[Math.floor(Math.random() * 16)];
//   }
//   return color;
//       }