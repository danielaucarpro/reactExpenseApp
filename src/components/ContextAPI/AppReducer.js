/*App reducer contain all the actions we need 
in order to control our state changes*/

/*exporting a anonimous function that will have all my actions
For this function to work we need the state and the action as parameters*/
const AppReducer = (state, action) => {
    switch (action.type) {
        case 'DELETE':
            return {
                ...state,
                transactions: state.transactions.filter(item => item.id !== action.payload)
            }
        case 'ADD':
            return {
                ...state,
                transactions: [...state.transactions, action.payload]
            }
        //the default AppReducer actions is to return the state as it is
        default:
            return state;
    }
}

export default AppReducer;