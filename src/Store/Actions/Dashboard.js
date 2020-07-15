import axios from 'axios';
import * as actionTypes from './ActionTypes';

export const fetchAllLinksAsync = () => dispatch =>{
    dispatch(fetchAllLinksStart())
    let url = 'http://localhost:8080/getalllinks'
    axios.post(url,{},{
        'headers':{
            'Authorization' : localStorage.getItem('token')
        }
    }).then(({data}) => {
        dispatch(fetchAllLinksSuccess(data))
    })
    .catch(err => dispatch(fetchAllLinksFail(err)))
}

const fetchAllLinksStart = () => {
    return {
        type : actionTypes.FETCH_ALL_LINKS_START
    }
}

const fetchAllLinksSuccess = (data) => {
    console.log(data);
    
    if(data.Length > 0){
        // The List is Not Empty
        return {
            type: actionTypes.FETCH_ALL_LINKS_SUCCESS,
            links : JSON.parse(data.List),
            selected : 0
        }
    }else{
        // Link is Empty
        return{
            type: actionTypes.FETCH_ALL_LINKS_SUCCESS,
            links : null,
            selected : -1
        }
    }
}

const fetchAllLinksFail = (data) => {
    console.log(data);
    return {
        type: actionTypes.FETCH_ALL_LINKS_FAIL,
        error : "Something Error"
    }
}

export const selectIndex = (index) => {
    return {
        type: actionTypes.SELECT_INDEX,
        selected : index
    }
}


// Create Link

export const createLinkStartAsync = (linkData) => dispatch  => {
    dispatch(createLinkStart())
    axios.post('http://localhost:8080/createlink',linkData,{
        headers :{
            'Authorization' : localStorage.getItem('token')
        }
    }).then(({data}) => {
        dispatch(createLinkSuccess())
        dispatch(fetchAllLinksAsync())
    }).catch(error => dispatch(createLinkFail(error.response.data)))
}

const createLinkStart = () => {
    return {
        type : actionTypes.CREATE_LINK_START
    }
}

const createLinkSuccess = () => {
    return {
        type: actionTypes.CREATE_LINK_SUCCESS
    }
}

const createLinkFail = (error) => {
    return {
        type: actionTypes.CREATE_LINK_FAIL,
        error : error.Message
    }
}

// set DackDrop 
export const setBackDrop = (value) => {
    return {
        type : actionTypes.SET_CREATE_BACKDROP,
        value : value
    }
}

export const closeDetailsMobile = () => {
    return {
        type : actionTypes.CLOSE_DETAILS_MOBILE
    }
} 