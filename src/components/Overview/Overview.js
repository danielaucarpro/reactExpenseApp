import React, { useContext } from "react";
import { GlobalContext } from "../ContextAPI/GlobalState";
//css
import './Overview.css'
//importing pages
import Header from "../Navbar/Header";
import Navbar from "../Navbar/Navbar";
import Balance from './Balance';
import ComingUp from "./ComingUp";


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
                <div className='overview-hostoryContainer'>
                    {history.map(item => (
                        <div key={item.id} className='overview-transaction negative'>
                            <li className='overview-list'>
                                <p>
                                    {item.text} - {"$: " + Math.abs(item.amount)}
                                </p>
                                <button onClick={() => deleteTransaction(item.id)}>X</button>
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