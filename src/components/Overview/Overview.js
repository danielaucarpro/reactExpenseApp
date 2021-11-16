import React, { useContext } from "react";
import { GlobalContext } from "../ContextAPI/GlobalState";
//material ui
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

//css
import './Overview.css'
//importing pages
import Header from "../Navbar/Header";
import Navbar from "../Navbar/Navbar";
import Balance from './Balance';
import ComingUp from "./ComingUp";
//icons
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const Overview = () => {

    /*importing GlobalContext
    using destructuring to avoid messy code.
    with out destructuring we need to do context.history to map the array*/
    const { history } = useContext(GlobalContext);
    const { deleteTransaction } = useContext(GlobalContext);
    console.log(history);

    return (
        <>
            <div className='overview-container'>
                <Header />
                <Balance />
                <h6 className='overview-historyText'>History</h6>
                {/* CREATE CONDITIONAL FOR NEGATIVE OR POSITIVE CLASS */}
                <div className='overview-historyContainer'>
                    {history.map(item => (
                        <div key={item.id} className='overview-transaction negative'>
                            <li className='overview-list'>
                                <div className='overview-text'>
                                    <span>{item.text}</span>
                                </div>
                                <div className='overview-amount'>
                                    <span>- {Math.abs(item.amount)}</span>
                                </div>
                                <div className='detailsIcon'>
                                    <MoreHorizIcon onClick={() => deleteTransaction(item.id)} />
                                </div>
                            </li>
                        </div>
                    ))}
                </div>
            </div>
            <ComingUp />
            <Navbar />
        </>
    );
}

export default Overview;