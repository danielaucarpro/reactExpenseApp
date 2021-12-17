import React, { useState } from 'react'
//css
import './PopUp.css';
//material ui
import { Button } from '@mui/material';
//icons
import CancelIcon from '@mui/icons-material/Cancel';

const PopUp = (props) => {
    console.log('pop up', props);

    const [newText, setNewText] = useState('');
    const [newAmount, setNewAmount] = useState('');


    const callDelete = async () => {
        props.delete(props.popUpData.id);
        const res = await fetch(`http://ec2-3-96-201-188.ca-central-1.compute.amazonaws.com/api/post//delete/${props.popUpData.id}`, {
            method: 'DELETE',
        })
        console.log(res);
        closePopUp();
    }

    const submitForm = (e) => {
        e.preventDefault();
        if (newText === '' || newAmount === '') {
            alert('ERROR! Please put some value');
        } else {
            let newData = {
                text: newText,
                amount: parseInt(newAmount),
                id: props.popUpData.id
            };
            // console.log(newData);
            props.update(newData);
            closePopUp();
        }
    }

    const closePopUp = () => {
        props.close();
    }

    return (
        <>
            {/* <div className='popUp-wrap'>
                <div className='popUp'>
                    <form className='popUp-formWrap ' onSubmit={submitForm}>

                    </form>
                </div>
            </div> */}
            <div className='popUp-wrap '>
                <div className='popUp'>
                    <CancelIcon onClick={closePopUp} className='popUp-btn' />
                    <div className='popUp-newPost'>
                        <p>Update Transaction</p>
                    </div>
                    <div className='popUp-container'>
                        <form onSubmit={submitForm}>
                            <div className='popUp-inputContainer'>
                                <div className='popUp-text'>
                                    <label>New name: </label>
                                </div>
                                <input value={newText} type="text" placeholder='New name here...' onChange={(e) => setNewText(e.target.value)} />
                            </div>
                            <div className='popUp-inputContainer'>
                                <div className='popUp-text'>
                                    <label>New amount: </label>
                                </div>
                                <input value={newAmount} type="text" placeholder='New amount here...' onChange={(e) => setNewAmount(e.target.value)} />
                            </div>
                            <div className='popUp-btnContainer'>
                                <Button
                                    type='submit'
                                    className='popUp-btnUpdate'
                                    variant="contained"
                                >Update</Button>
                                <Button
                                    onClick={callDelete}
                                    className='popUp-btnUpdate delete'
                                    variant="contained"
                                >Delete</Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>

    )
}

export default PopUp;