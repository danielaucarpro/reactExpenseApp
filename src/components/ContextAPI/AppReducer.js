/*App reducer contain all the actions we need 
in order to control our state changes*/

/*exporting a anonimous function that will have all my actions
For this function to work we need the state and the action as parameters*/
const AppReducer = (state, action) => {
    switch (action.type) {
        case 'DELETE':
            return [...state, state.filter(item => item.id !== action.payload)];
        case 'ADD':
            return [...state, action.payload];
        case 'UPDATE':
            console.log(state, "REDUCER");
            return state.map((item)=>({
                    text: item.id === action.payload.id ? item.text : action.payload.text,
                    amount: item.id === action.payload.id ? item.amount : action.payload.amount
                }))
            
        //the default AppReducer actions is to return the state as it is
        default:
            return state;
    }
}

export default AppReducer;