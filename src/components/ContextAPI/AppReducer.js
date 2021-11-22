/*App reducer contain all the actions we need 
in order to control our state changes*/

/*exporting a anonimous function that will have all my actions
For this function to work we need the state and the action as parameters*/
const AppReducer = (state, action) => {
    switch (action.type) {
        case 'DELETE':
            let index = state.findIndex((expense) => expense.id === action.payload);
            if (index !== -1) {
                state.splice(index, 1);
            }
            return state;
            // return [...state, state.splice(item => item.id !== action.payload)];
        case 'ADD':
            return [...state, action.payload];
        case 'UPDATE':
            // console.log(state, "REDUCER");
            // return state.map((item) => ({
            //     text: item.id === action.payload.id ? item.text : action.payload.text,
            //     amount: item.id === action.payload.id ? item.amount : action.payload.amount
            // }))
            let newState = state.map((item) => {
                if (item.id === action.payload.id) {
                    item.text = action.payload.text;
                    item.amount = action.payload.amount;
                }
                return item;
            })
            console.log(newState, "NEW STATE");
            return newState;

        //the default AppReducer actions is to return the state as it is
        default:
            return state;
    }
}

export default AppReducer;