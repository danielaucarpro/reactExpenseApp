/*App reducer contain all the actions we need 
in order to control our state changes*/

/*exporting a anonimous function that will have all my actions
For this function to work we need the state and the action as parameters*/
export default (state, action) => {
    switch(action.type){

        //the default AppReducer actions is to return the state as it is
        default:
            return state;
    }
}