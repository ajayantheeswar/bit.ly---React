import axios from 'axios';
import * as actionTypes from './ActionTypes';

const AuthStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
}

const AuthSuccess = () => {
    return {
        type:actionTypes.AUTH_SUCCESS
    }
}

const AuthFail = (err) => {
    return {
        type:actionTypes.AUTH_FAIL,
        error : err.Message
    }
}

export const AuthStartAsync = (isSignup,authDetails) => dispatch => {
    let url = isSignup ? 'http://localhost:8080/signup' : 'http://localhost:8080/signin';

    dispatch(AuthStart())
    console.log(authDetails);
    axios.post(url,authDetails)
        .then(({data}) => {
            console.log(data);
            localStorage.setItem('token',data.message)
            localStorage.setItem('name',data.name)
            dispatch(AuthSuccess())
        })
        .catch(err => dispatch(AuthFail(err.response.data)))
}

export const AuthCheckAsync = () => dispatch => {
    if(localStorage.getItem('token') && localStorage.getItem('name')){
        dispatch(AuthSuccess())
    }
}

export const AuthLogout = () => {
    localStorage.clear()
    return {
        type : actionTypes.AUTH_LOGOUT
    }
}