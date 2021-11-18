import React, { useState } from 'react'


const PopUp = (props) => {
    //import comtext
    //useState id
    //call the dispatch function
    //pass the id using payload

    console.log('pop up', props);

    const [newText, setNewText] = useState('');
    const [newAmount, setNewAmount] = useState('');


    const callDelete = () => {
        props.delete(props.id);
    }

    const submitForm = (e) => {
        e.preventDefault();
        let newData = {
            id: props.id,
            text: newText,
            amount: parseInt(newAmount)
        };
        console.log(newData);
        props.update(newData);
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
            </form>
        </>
    )
}

export default PopUp;