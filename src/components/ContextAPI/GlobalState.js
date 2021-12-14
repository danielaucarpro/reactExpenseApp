import React, { createContext, useReducer, useEffect } from "react";
//importing Reducer
import AppReducer from './AppReducer';
//importing db data
import FetchUsersTransactions from './FetchUsersTransactions';

//Inicial State with dummy data
let inicialState = [
    { id: 1, text: 'Lunch', amount: -15, date: '2021-12-17' },
    { id: 2, text: 'Freelance Job', amount: 300, date: '2021-12-19' },
    { id: 3, text: 'Book', amount: -10, date: '2021-11-17' },
    { id: 4, text: 'Pharmacy', amount: -20, date: '2022-01-17' },
    { id: 5, text: 'Lunch', amount: -15, date: '2021-12-24' },
    { id: 6, text: 'Freelance Job', amount: 300, date: '2021-12-01' },
    { id: 7, text: 'Book', amount: -10, date: '2021-12-10' },
    { id: 8, text: 'Pharmacy', amount: -20, date: '2021-12-10' },
]


/* Creating Context
exporting global state so other components can use it as data*/
export const GlobalContext = createContext(inicialState);

/*Creating Provider
Since this data will be pass for my children components,
We need to pass children as a props*/
export const GlobalProvider = ({ children }) => {
    //calling the reducer
    const [state, dispatch] = useReducer(AppReducer, inicialState);
    //user data from database
    const userTransactions = [FetchUsersTransactions()];
    console.log(userTransactions[0]);

    //update inicial state
    const updateInicialState = () => {
        inicialState = state;
    }

    //actions
    //delete
    const deleteTransaction = (id) => {
        dispatch({
            type: 'DELETE',
            payload: id
        });
    };

    //add
    const addTransaction = (newTransaction) => {
        dispatch({
            type: 'ADD',
            payload: newTransaction
        });
    };

    //update 
    const updateTransaction = (updatedTransaction) => {
        console.log(updatedTransaction, "updated Transaction");
        dispatch({
            type: 'UPDATE',
            payload: {
                id: updatedTransaction.id,
                text: updatedTransaction.text,
                amount: updatedTransaction.amount
            }
        });
    };

    //provider component
    return (
        <GlobalContext.Provider value={{
            history: state,
            deleteTransaction,
            addTransaction,
            updateTransaction,
            updateInicialState
        }}>
            {children}
        </GlobalContext.Provider>
    );
};