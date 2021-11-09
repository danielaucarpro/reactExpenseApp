import React, { createContext, useReducer } from "react";
//importing Reducer
import AppReducer from './AppReducer';

//Inicial State with dummy data
const inicialState = {
    transactions: [
        { id: 1, text: 'Lunch', amount: -15 },
        { id: 2, text: 'Freelance Job', amount: 300 },
        { id: 3, text: 'Book', amount: -10 },
        { id: 4, text: 'Pharmacy', amount: -20 }
    ]
}

/* Creating Context
exporting global state so other components can use it as data*/
export const GlobalContext = createContext(inicialState);

/*Creating Provider
Since this data will be pass for my children components,
We need to pass children as a props*/
export const GlobalProvider = ({ children }) => {
    //calling the reducer
    const [state, dispatch] = useReducer(AppReducer, inicialState);

    //provider component
    return (
        <GlobalContext.Provider value ={{
            history: state.transactions,
        }}>
            {children}
        </GlobalContext.Provider>
    );
};