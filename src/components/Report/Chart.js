import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import React, { useContext } from 'react'
import { GlobalContext } from "../ContextAPI/GlobalState";

ChartJS.register(ArcElement, Tooltip, Legend);



export function Chart () {


  const { history } = useContext(GlobalContext);

const amounts = history.map( history => history.amount);

// Calculate the total earned
const earned = amounts
  .filter(item => item > 0)
  .reduce((acc, item) => (acc += item), 0);

  // Calculate the total spent
const spent = (
  amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
  -1
);

 const data = {
  labels: ['Spent', 'Earned'],
  datasets: [
    {
      label: '# of Votes',
      data: [spent, earned],
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


  return <Doughnut
  data={data} />;
}
