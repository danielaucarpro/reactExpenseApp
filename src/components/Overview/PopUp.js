import React, { useState } from 'react'


const PopUp = (props) => {
    console.log('pop up', props);

    const [newText, setNewText] = useState('');
    const [newAmount, setNewAmount] = useState('');


    const callDelete = () => {
        props.delete(props.popUpData.id);
    }

    const submitForm = (e) => {
        e.preventDefault();
        let newData = {
            text: newText,
            amount: parseInt(newAmount),
            id: props.popUpData.id
        };
        // console.log(newData);
        props.update(newData);
    }

    const closePopUp = () => {
        props.close();
    }

    return (
        <>
            <form onSubmit={submitForm}>
                <div>
                    <label>New text: </label>
                    <input value={newText} type="text" placeholder='new text here...' onChange={(e) => setNewText(e.target.value)} />
                </div>
                <div>
                    <label>New amount: </label>
                    <input value={newAmount} type="text" placeholder='new amount here...' onChange={(e) => setNewAmount(e.target.value)} />
                </div>
                <button type='submit'>update</button>
                <button onClick={callDelete}>delete</button>
                <button onClick={closePopUp}>close</button>
            </form>
        </>
    )
}

export default PopUp;