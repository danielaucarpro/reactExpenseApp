import React from 'react'


const PopUp = (props) => {
    //import comtext
    //useState id
    //call the dispatch function
    //pass the id using payload

    console.log('pop up', props);


    const callDelete = () => {
        props.delete(props.id);
    }

    return (
        <div>
            POPUP
            <button onClick={callDelete}>delete</button>
        </div>
    )
}

export default PopUp;