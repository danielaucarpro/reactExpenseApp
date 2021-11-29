import React from 'react'
import { SpentEarned } from './SpentEarned'
import { Breakdown } from './Breakdown'
import { Chart } from './Chart'
import './Report.css'

const Report = () => {
  return (
    <>
      <div className = "container">
      <h1 className = "text-left">Report</h1>
      <Chart />
      <SpentEarned />
      <h5 className = "text-left">SPENDING BREAKDOWN</h5>
      <Breakdown />
      </div>
    </>
  )
}

export default Report;
