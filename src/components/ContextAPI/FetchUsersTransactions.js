import { useState, useEffect } from 'react';

const FetchUsersTransactions = () => {
    //user hook
    const [user, setUser] = useState(null);

    //fetching API
    useEffect(async () => {
        //checking if user is logged in
        if (localStorage.getItem('access-token') === '') {
            alert('Please login first!');
        } else {
            //getting user transactions with access-token
            const response = await fetch('http://localhost:5000/post/getTransactions', {
                method: "GET",
                headers: {
                    'x-access-token': localStorage.getItem('access-token'),
                }
            })
            const data = await response.json();
            setUser(data.data);
            // console.log(data.data);
        }

    }, []);

    //returning user hook in order to use the user's transaction list (in db)
    return user
}

export default FetchUsersTransactions;