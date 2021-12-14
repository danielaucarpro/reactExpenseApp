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
<<<<<<< HEAD
    <Box sx={{ display: 'flex', alignItems: 'center', m:5}}>
      <Grid className = "report-container">
=======
      <div className = "report-container">
>>>>>>> ecea3e57368b41a460077ef60e4d7000bfa2d6cd
      <h1 className = "text-left">Report</h1>
      <Chart />
      <SpentEarned />
      <h5 className = "text-left">SPENDING BREAKDOWN</h5>
      <Breakdown />
      </Grid>
    </Box>
    </>
  )
}

export default Report;
