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
                    {history.length > 0 ? history.map((item) => (
                        <div key={item.id} className={`comingUp-card ${item.amount > 0 ? 'comingUp-positive' : 'comingUp-negative'}`}>
                            <div className='comingUp-header'>
                                <span className='comingUp-itemName' >{item.text}</span>
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
