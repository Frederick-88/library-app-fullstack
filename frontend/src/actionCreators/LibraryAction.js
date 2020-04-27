import axios from 'axios'

const url = 'http://localhost:8000/library'

export const addBookLibrary = (dataInitial) => {
    return dispatch => {
        axios.post(`${url}/post`,dataInitial)
        .then((response)=>{
            window.location.reload();
            dispatch({
                type: 'ADD_DATA_LIBRARY',
                payload: response.data
            })
        })
    }
}

export const editBookLibrary = (dataInitial) => {
    return dispatch => {
        axios.put(`${url}/edit/${dataInitial._id}`,dataInitial)
        // .then((response)=>{
            // debugger;
            dispatch({
                type: 'EDIT_DATA_LIBRARY',
                payload: dataInitial
            })
        // })
    }
}

export const showEditForm = () => {
    return (dispatch)=>{

        dispatch({
            type: 'LIBRARIES_SHOW_EDIT'
        })
    }
}

export const hideEditForm = () => {
    return (dispatch)=>{

        dispatch({
            type: 'LIBRARIES_HIDE_EDIT'
        })
    }
}

export const showDeleteForm = () => {
    return (dispatch)=>{

        dispatch({
            type: 'LIBRARIES_SHOW_DELETE'
        })
    }
}

export const hideDeleteForm = () => {
    return (dispatch)=>{

        dispatch({
            type: 'LIBRARIES_HIDE_DELETE'
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