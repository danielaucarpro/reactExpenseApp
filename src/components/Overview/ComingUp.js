import React, { useContext, useState } from "react";
import { GlobalContext } from "../ContextAPI/GlobalState";
import { Link } from "react-router-dom";
import moment from "moment";
//pages
import PopUp from './PopUp';
//css
import './ComingUp.css';
//icons
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const ComingUp = () => {

    //update this for only from 'x' date.
    const { history } = useContext(GlobalContext);
    const { deleteTransaction } = useContext(GlobalContext);
    const { updateTransaction } = useContext(GlobalContext);
    const [isUpdating, setIsUpdating] = useState({ open: false });

    let currentDateMoment = moment();
    const currentDate = moment(currentDateMoment._d).format('YYYY-MM-DD');
    //filtering future expense
    const expense = history.filter((data) => data.amount < 0);
    const futureExpenses = expense.filter((data)=>data.date > currentDate);
    // console.log(currentDateMoment._d);
    // console.log(currentDate);
    // console.log(futureExpenses, 'FUTURE');

    const popUpModal = (id) => {

        setIsUpdating({
            open: !isUpdating,
            id
        });
    }
    const closePopUp = () => {
        setIsUpdating({ open: false });
    }

    return (
        <>
            <div className='comingUp-container'>
                <h4 className='comingUp-text'>Coming Up</h4>
                <div className='comingUp-cardContainer'>
                    {futureExpenses.length > 0 ? futureExpenses.map((item) => (
                        <div key={item.id} className={`comingUp-card ${item.amount > 0 ? 'comingUp-positive' : 'comingUp-negative'}`}>
                            <div className='comingUp-header'>
                                <span className='comingUp-itemName' >{item.name}</span>
                                <MoreHorizIcon onClick={() => popUpModal(item.id)} className='comingUp-details' />
                            </div>
                            <p className='comingUp-date'>{moment(item.date).format('MMM DD')}</p>
                            <p className='comingUp-amount'>$ {item.amount}</p>
                            {isUpdating.id === item.id ? <PopUp close={closePopUp} delete={deleteTransaction} update={updateTransaction} popUpData={isUpdating} /> : null}
                        </div>)) :
                        <div className="comingUp-noExpense" >
                            <h5>Nothing to show here...</h5>
                        </div>
                    }
                </div>
            </div>
        </>
    )
}

export default ComingUp;
