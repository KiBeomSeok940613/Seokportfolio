
const darkWhite = {
    darkMode : false,
}

const darkModeReducer = (state = darkWhite, action) =>{
    switch(action.type){
        case 'TOGGLE_DARK_MODE':

        
            return{
                ...state,
                darkMode: !state.darkMode,
            };
            default:
                return state;
    }
}

export default darkModeReducer;