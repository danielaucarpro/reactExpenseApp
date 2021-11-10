import React, { useContext } from "react";
import { GlobalContext } from "../ContextAPI/GlobalState";
//importing pages
import Header from "../Navbar/Header";
import Navbar from "../Navbar/Navbar";
import Balance from './Balance';


const Overview = () => {

    /*importing GlobalContext
    using destructuring to avoid messy code.
    with out destructuring we need to do context.history to map the array*/
    const { history } = useContext(GlobalContext);
    const { deleteTransaction } = useContext(GlobalContext);
    console.log(history);

    return (
        <>
            <Header />
            <div>Overview Page</div>
            <Balance />
            <h4>History</h4>
            {history.map(item => (
                <div key={item.id}>
                    <li>
                        {item.text}, {"$: " + Math.abs(item.amount)}
                    </li>
                    <button onClick={() => deleteTransaction(item.id)}>X</button>
                </div>
            ))}
            <h4>Coming Up</h4>
            <Navbar />
        </>
    );
}

export default Overview;