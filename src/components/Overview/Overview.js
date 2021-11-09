import React, { useContext } from "react";
import { GlobalContext } from "../ContextAPI/GlobalState";
//importing components
import Balance from './Balance';

const Overview = () => {

    /*importing GlobalContext
    using destructuring to avoid messy code.
    with out destructuring we need to context.history to map the array*/
    const { history } = useContext(GlobalContext);
    console.log(history);

    return (
        <>
            <div>Overview Page</div>
            <Balance/>
            <h4>History</h4>
            {history.map(item => (
                <li key={item.id}>
                    {item.text}, {"$: " + Math.abs(item.amount)}
                </li>
            ))}
        </>
    );
}

export default Overview;