import React from 'react'
import { SpentEarned } from './SpentEarned'
import { Breakdown } from './Breakdown'
import { Chart } from './Chart'
import './Report.css'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';


const Report = () => {
  return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'center', m: 5 }}>
        <Grid className="report-container">
          <h1 className="text-left">Report</h1>
          <Chart />
          <SpentEarned />
          <h5 className="text-left">SPENDING BREAKDOWN</h5>
          <Breakdown />
        </Grid>
      </Box>
    </>
  )
}

export default Report;
