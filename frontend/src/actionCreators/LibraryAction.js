import axios from 'axios'

const url = 'http://localhost:8000/library'

export const addBookLibrary = (dataInitial) => {
    return dispatch => {
        axios.post(`${url}/post`,dataInitial)
        .then((response)=>{
            dispatch({
                type: 'ADD_DATA_LIBRARY',
                payload: response.data
            })
        })
    }
}

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

// export const ShowAddLibrary = () => {
//     return(dispatch) => {
//         dispatch({
//             type: 'SHOW_ADD_LIBRARY'
//         })
//     }
// }

// export const HideAddLibrary = () => {
//     return(dispatch) => {
//         dispatch({
//             type: 'HIDE_ADD_LIBRARY'
//         })
//     }
// }