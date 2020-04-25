const initialState = {
    data: [],
    isShowAdd: false
}

const LibraryReducer = (state = initialState, action) => {
    switch (action.type){
        case 'GET_DATA_LIBRARY':
            return {...state, data:action.payload}
            
        case 'HIDE_ADD_LIBRARY':
            return { ...state, isShowAdd: false}

        case 'SHOW_ADD_LIBRARY':
            return { ...state, isShowAdd: true}

        default:
        return state;
    }
}

export default LibraryReducer