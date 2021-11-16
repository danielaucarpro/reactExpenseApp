import React, {useState,  useContext} from 'react'; 
import { Link } from "react-router-dom";
import {GlobalContext} from '../ContextAPI/GlobalState'; 
import './AddPayment.css';

export const AddPayment = () => {
    //Hook. create state and a function to manipulate the state (setText and setAmount)
    const [text, setText] = useState('');
    const [date, setDate] = useState('');
    const [amount, setAmount] = useState(0); 

    //use transaction action
    const {addTransaction} = useContext(GlobalContext); 

    const onSubmit = e => {
        e.preventDefault(); 

        const newTRansaction = {
            //generate random number id 
            id : Math.floor(Math.random() * 100000000), 
            //passinf value into object
            text, 
            date,
            amount : +amount
        }

        //call addTransaction from context and passing newTransaction
        addTransaction(newTRansaction); 
    }

    return (
        <>
           <h3>Add a Bill</h3>

            <div className = "form-container">
              <form onSubmit = {onSubmit}>
                <div className = "form-control">
                    <label htmlFor = "text">Name of the Purchansed Item</label>
                    <br />
                    {/* use onchange to update the state and call function to give us whatever is being typed */}
                    <input type = "text" value ={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..."/>
                </div>
                <div className = "form-control">
                    <label htmlFor = "text">Date</label>
                    <br />
                    <input type = "text" value ={date} onChange={(e) => setDate(e.target.value)} placeholder="Enter Date..."/>
                </div>
                <div className = "form-control">
                    <label htmlFor = "amount">
                        Amount <br />
                    </label>
                    <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="$ Enter amount..."/>
                </div>
                {/* <Link to='/overview' style={{ textDecoration: 'none', color:'white'}}> */}
                    <button className="btn">Add Bill</button>
                {/* </Link> */}
              </form>
            </div>
        </>
    )
}

export default AddPayment;
