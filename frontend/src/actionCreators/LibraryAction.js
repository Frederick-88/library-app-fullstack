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
    console.log(dataInitial);
    return dispatch => {
        axios.put(`${url}/edit/${dataInitial._id}`,dataInitial)
        
        .then((response)=>{
            // debugger;
            dispatch({
                type: 'EDIT_DATA_LIBRARY',
                payload: dataInitial
            })
            dispatch({
                type: 'LIBRARIES_HIDE_EDIT'
            })
        })
        .catch((error)=>{
            console.log(error);
            
        })
    }
}

export const DeleteBookLibrary = (DataInitial) => {
    console.log(DataInitial);
    return dispatch => {
        axios.delete(`${url}/delete/${DataInitial._id}`,DataInitial)
        
        .then((response)=>{
            // debugger;
            dispatch({
                type: 'DELETE_DATA_LIBRARY',
                payload: DataInitial
            })
            dispatch({
                type: 'LIBRARIES_HIDE_DELETE'
            })
        })
        .catch((error)=>{
            console.log(error);
            
        })
    }
}


export const showEditForm = (dataInitial) => {
    return (dispatch)=>{

        dispatch({
            type: 'LIBRARIES_SHOW_EDIT',
            payload:dataInitial
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

export const showDeleteForm = (dataInitial) => {
    return (dispatch)=>{

        dispatch({
            type: 'LIBRARIES_SHOW_DELETE',
            payload:dataInitial
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