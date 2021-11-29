import React from 'react'
import Paper from "@material-ui/core/Paper";


export const SpentEarned = () => {
  return (
    <>
      <Paper elevation={3}>
        <div>
          <h4>Spent</h4>
          <p>$0.00</p>
        </div>
        <div>
          <h4>Earned</h4>
          <p>$0.00</p>
        </div>
      </Paper>
    </>
  )
}

