import * as ActionTypes from '../Actions/ActionTypes';

const initialState = {
    auth : false,
    loading : true,
    error : null
}


const reducer = (state=initialState, action) => {
    switch (action.type) {
        case ActionTypes.AUTH_START  :
            return{
                ...state,
                loading : true
            }
        case ActionTypes.AUTH_SUCCESS  :
            return{
                ...state,
                loading : false,
                auth : true,
                error : null
            }
        case ActionTypes.AUTH_FAIL  :
            return{
                ...state,
                loading : false,
                auth : false,
                error : action.error
            }
        case ActionTypes.AUTH_LOGOUT  :
                return{
                    ...state,
                    loading : false,
                    auth : false,
                    error : null
                }
        default :
            return state
    }
}

export default reducer;