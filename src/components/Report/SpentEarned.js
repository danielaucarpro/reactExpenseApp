import React from 'react'
import Paper from "@material-ui/core/Paper";
import './SpentEarned.css'


export const SpentEarned = () => {
  return (
    <>
      <Paper elevation={3} className="SpentEarned">
        <div>
          <h4>Spent</h4>
          <p>$2,424</p>
        </div>
        <div>
          <h4>Earned</h4>
          <p>$5,820</p>
        </div>
      </Paper>
    </>
  )
}

