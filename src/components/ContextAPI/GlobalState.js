import React, { createContext, useReducer, useEffect, useState } from "react";
//importing Reducer
import AppReducer from './AppReducer';
//importing db data
import FetchUsersTransactions from './FetchUsersTransactions';

//Inicial State with dummy data
const inicialState = [
    {id: 1, name: 'Dinner', date: '2021-12-08', categories: 'Food', amount: -15},
    {id: 2, name: 'Lunch', date: '2021-12-09', categories: 'Food', amount: -25},
    {id: 3, name: 'Light', date: '2021-12-10', categories: 'Bill', amount: -75},
    {id: 4, name: 'Water', date: '2021-12-11', categories: 'Bill', amount: -135},
    {id: 5, name: 'Game', date: '2021-12-12', categories: 'Entertainment', amount: -79},
    {id: 6, name: 'Freelance', date: '2021-12-13', categories: 'Food', amount: 500},
    {id: 7, name: 'Grocery', date: '2021-12-14', categories: 'Groceries', amount: -105},
    {id: 8, name: 'Salary', date: '2021-12-15', categories: 'Entertainment', amount: 3500},
    {id: 9, name: 'Cinema', date: '2021-12-16', categories: 'Entertainment', amount: -35},
    {id: 11, name: 'PC', date: '2022-01-17', categories: 'Entertainment', amount: -778},
    {id: 12, name: 'PC', date: '2022-02-17', categories: 'Entertainment', amount: -778},
    {id: 13, name: 'PC', date: '2022-03-17', categories: 'Entertainment', amount: -778},
    {id: 14, name: 'PC', date: '2022-04-17', categories: 'Entertainment', amount: -778},
    {id: 15, name: 'PC', date: '2022-05-17', categories: 'Entertainment', amount: -778},
    {id: 16, name: 'PC', date: '2022-06-17', categories: 'Entertainment', amount: -778}
]


/* Creating Context
exporting global state so other components can use it as data*/
export const GlobalContext = createContext(inicialState);

/*Creating Provider
Since this data will be pass for my children components,
We need to pass children as a props*/
export const GlobalProvider = ({ children }) => {
    //initial state
    // const [inicialState, setInicialState] = useState([])
    //user data from database
    const userTransactions = [FetchUsersTransactions()][0];
    console.log(userTransactions);
    // useEffect(() => {
    //     setInicialState(userTransactions)
    // })
    //calling the reducer
    const [state, dispatch] = useReducer(AppReducer, inicialState);

    //ACTIONS
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
            updateTransaction
        }}>
            {children}
        </GlobalContext.Provider>
    );
};