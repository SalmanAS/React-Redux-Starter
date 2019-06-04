
const initialState = {
    appState: 'initial'
}

const appReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SCREENLOAD_SUCCESS' :
            return {...state, appState: action.payload};      
        default:
            return state;
    }
}

export default appReducer;