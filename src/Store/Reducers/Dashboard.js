import * as ActionTypes from '../Actions/ActionTypes';

const initialState = {
    links : {
        links : null,
        length : 0,
        selected : -1,
        loading : false,
        error: null
    },
    create : {
        loading: false,
        backDrop : false,
        error : null
    }
    
}


const reducer = (state=initialState, action) => {
    switch (action.type) {
        case ActionTypes.FETCH_ALL_LINKS_START:
            return {
                ...state,
                links : {
                    ...state.links,
                    loading :true
                }
            }
        case ActionTypes.FETCH_ALL_LINKS_SUCCESS:
            return {
                ...state,
                links : {
                    ...state.links,
                    loading :false,
                    links : action.links,
                    selected : action.selected,
                    error: null
                }
            }
        case ActionTypes.FETCH_ALL_LINKS_FAIL : 
            return{
                ...state,
                links : {
                    ...state.links,
                    loading :false,
                    links : null,
                    selected : -1,
                    error: action.error
                }
            }
        case ActionTypes.SELECT_INDEX :
            return{
                ...state,
                links :{
                    ...state.links,
                    selected : action.selected
                }
            }
        
        case ActionTypes.CREATE_LINK_START :
            return{
                ...state,
                create :{
                    ...state.create,
                    loading:true
                }
            
            }
        
        case ActionTypes.CREATE_LINK_SUCCESS:
            return{
                ...state,
                create :{
                    ...state.create,
                    loading:false,
                    backDrop : false,
                    error : null
                }
            }

        case ActionTypes.CREATE_LINK_FAIL :{
            return {
                ...state,
                create :{
                    ...state.create,
                    loading:false,
                    error: action.error
                }
            }
        }

        case ActionTypes.SET_CREATE_BACKDROP : {
            return {
                ...state,
                create :{
                    ...state.create,
                    backDrop : action.value
                }
            }
        }

        default :
            return state
    }
}

export default reducer;