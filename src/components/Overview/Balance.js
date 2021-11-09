import React, { useContext } from "react";
import { GlobalContext } from "../ContextAPI/GlobalState";

const Balance = () => {

    /*importing GlobalContext
    using destructuring to avoid messy code.
    with out destructuring we need to context.history to map the array*/
    const { history } = useContext(GlobalContext);
    console.log(history);

    //getting all the amounts into an array
    const amount = history.map(values => values.amount);
    //using reduce to get our balance
    const total = amount.reduce((acc, item) => (acc += item), 0).toFixed(2);

    return (
        <>
            <h4>This month balance</h4>
            <p>{"$: " + total}</p>
        </>
    )
}

export default Balance;