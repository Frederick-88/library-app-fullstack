import axios from 'axios'

export const GetDataLibrary = () => {
    return(dispatch) => {
        axios.get('http://localhost:8000/library/get')
        // axios.get('https://heroes-indonesia.herokuapp.com/heroes/get')
        .then((response)=>{
        dispatch({
            type: 'GET_DATA_LIBRARY',
            payload : response.data.data
        })
        })
    }
}

export const ShowAddLibrary = () => {
    return(dispatch) => {
        dispatch({
            type: 'SHOW_ADD_LIBRARY'
        })
    }
}

export const HideAddLibrary = () => {
    return(dispatch) => {
        dispatch({
            type: 'HIDE_ADD_LIBRARY'
        })
    }
}