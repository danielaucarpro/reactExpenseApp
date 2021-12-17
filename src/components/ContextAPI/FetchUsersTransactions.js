import { useState, useEffect, useContext } from 'react';
import { GlobalContext } from "../ContextAPI/GlobalState";


const FetchUsersTransactions = () => {
    //user hook
    const [user, setUser] = useState();
    const globalState = useContext(GlobalContext);

    //fetching API
    useEffect(async () => {
        //checking if user is logged in
        if (localStorage.getItem('access-token') === '') {
            alert('Please login first!');
        } else {
            //getting user transactions with access-token
            const response = await fetch('http://ec2-3-96-201-188.ca-central-1.compute.amazonaws.com/api/post/getTransactions', {
                method: "GET",
                headers: {
                    'x-access-token': localStorage.getItem('access-token'),
                }
            })
            const data = await response.json();
            if (data.data.length > 0) {
                setUser(data.data);
            }
            // console.log(data.data);
        }
    }, [globalState]);

    //returning user hook in order to use the user's transaction list (in db)
    return user

}

export default FetchUsersTransactions;