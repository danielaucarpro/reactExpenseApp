import React, { useContext, useState } from "react";
import { GlobalContext } from "../ContextAPI/GlobalState";
//material ui
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
//css
import './Overview.css'
//importing pages
import Header from "../Navbar/Header";
import Navbar from "../Navbar/Navbar";
import Balance from './Balance';
import ComingUp from "./ComingUp";
import History from './History';

const Overview = () => {

    return (
        <>
            <div className='overview-container'>
                <Header />
                <Balance />
                <h6 className='overview-historyText'>History</h6>
                <History />
            </div>
            <ComingUp />
            <Navbar />
        </>
    );
}

export default Overview;