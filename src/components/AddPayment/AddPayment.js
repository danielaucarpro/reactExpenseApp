import React, {useState,  useContext} from 'react'; 
import './AddPayment.css'; 
import { Link } from "react-router-dom";
import {GlobalContext} from '../ContextAPI/GlobalState'; 
//import {styled} from '@mui/material/styles';
import Box from '@mui/material/Box';
import { Button, FormControl, Input, InputAdornment, InputLabel, Typography} from '@mui/material';
import LabelIcon from '@mui/icons-material/Label';
import TodayIcon from '@mui/icons-material/Today';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import LoginIcon from '@mui/icons-material/Login';


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
<<<<<<< HEAD
            <Box sx={{ display: 'flex', alignItems: 'flex-end', m:5}}>
=======
           <h3>Add a Bill</h3>
>>>>>>> f447ca1ea0637a73adaa524660f1167a0f118653

           <Box sx={{ display: 'flex', alignItems: 'flex-end', m:5}}>
            
              <form onSubmit = {onSubmit}>
                <Typography variant="h6" gutterBottom component="div" sx={{m:5, px:5}}>
                    Add a Bill
                </Typography>
                <FormControl variant="standard" sx={{m:5}}>
                    <InputLabel htmlFor="text">
                    Name of the Purchansed Item
                    </InputLabel>
                     {/* use onchange to update the state and call function to give us whatever is being typed */}
                    <Input
                       type = "text" 
                       value ={text} 
                       onChange={(e) => setText(e.target.value)} 
                       placeholder="Enter text.."
                       id="input-with-icon-purchaseditem"
                       startAdornment={
                           <InputAdornment position="start">
                               <LabelIcon />
                           </InputAdornment>
                       }
                       type = "text" 
                       value ={text} onChange={(e) => setText(e.target.value)} 
                       placeholder="Enter text.."
                    />
                </FormControl>

                <br />

                <FormControl variant="standard" sx={{m:5}}>
                    <InputLabel htmlFor="text">
                      Date
                    </InputLabel>
                     {/* use onchange to update the state and call function to give us whatever is being typed */}
                    <Input
                       id="input-with-icon-calender"
                       startAdornment={
                           <InputAdornment position="start">
                               <TodayIcon />
                           </InputAdornment>
                       }
                       input type = "date" 
                       value ={date} onChange={(e) => setDate(e.target.value)} 
                       placeholder="Enter Date..."
                    />
                </FormControl>

                <br />

                <FormControl variant="standard" sx={{m:5}}>
                    <InputLabel htmlFor="text">
                      Amount
                    </InputLabel>
                     {/* use onchange to update the state and call function to give us whatever is being typed */}
                    <Input
                       id="input-with-icon-calender"
                       startAdornment={
                           <InputAdornment position="start">
                               <MonetizationOnIcon />
                           </InputAdornment>
                       }
                       input type="number" 
                       value={amount} onChange={(e) => setAmount(e.target.value)} 
                       placeholder="$ Enter amount..."
                    />
                </FormControl>
                
                <br/>
                    <Button type="submit" variant="contained"sx={{m:2}} >Add Bill</Button>
                    <Button 
                       type="submit" 
                       variant="contained" 
                       component={Link}
                       to='/overview'
                    >
                        Back to page
                    </Button>
              </form>
            </Box>
        </>
    )
}

export default AddPayment;
