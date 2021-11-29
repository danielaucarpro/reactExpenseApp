import React, { useContext, useState } from "react";
import { GlobalContext } from "../ContextAPI/GlobalState";
//material ui styles
import { styled } from '@mui/material/styles';
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
                    {history.map((item) => (
                        <div key={item.id} className={`comingUp-card ${item.amount > 0 ? 'comingUp-positive' : 'comingUp-negative'}`}>
                            <div className='comingUp-header'>
                                <span className='comingUp-itemName' >{item.text}</span>
                                <MoreHorizIcon onClick={() => popUpModal(item.id)} className='comingUp-details' />
                            </div>
                            <p className='comingUp-date'>{item.date}</p>
                            <p className='comingUp-amount'>$ {item.amount}</p>
                            {isUpdating.id === item.id ? <PopUp close={closePopUp} delete={deleteTransaction} update={updateTransaction} popUpData={isUpdating} /> : null}
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default ComingUp;
