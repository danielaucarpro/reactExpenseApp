import React, { useContext, useState } from "react";
import { GlobalContext } from "../ContextAPI/GlobalState";
//material ui
import Box from '@mui/material/Box';
import { sizing } from '@material-ui/system';
import Grid from '@mui/material/Grid';
//css
import './Overview.css'
//importing pages
import Header from "../Navbar/Header";
import Navbar from "../Navbar/Navbar";
import Balance from './Balance';
import ComingUp from "./ComingUp";
import History from './History';
//chart
import MultiAxis from './Charts/MultiAxis';
import Radar from './Charts/Radar';

const Overview = () => {

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <Grid xs={0} className='overview-container'>
                    <Header />
                    <Balance />
                    <h6 className='overview-historyText'>History</h6>
                    <History />
                </Grid>
                <ComingUp />
                <MultiAxis/>
                <Radar/>
                <Navbar />
            </Box>
        </>
    );
}

export default Overview;