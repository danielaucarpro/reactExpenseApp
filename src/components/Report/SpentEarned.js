import React, { useContext } from 'react'
import { GlobalContext } from "../ContextAPI/GlobalState";


import Paper from "@material-ui/core/Paper";
import './SpentEarned.css'


export const SpentEarned = () => {
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

  return (
    <>
      <Paper elevation={3} className="SpentEarned">
        <div>
          <h4>Spent</h4>
          <p>${spent}</p>
        </div>
        <div>
          <h4>Earned</h4>
          <p>${earned}</p>
        </div>
      </Paper>
    </>
  )
}

