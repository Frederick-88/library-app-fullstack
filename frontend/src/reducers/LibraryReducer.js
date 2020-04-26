const initialState = {
    data: [],
    isShowAdd: false,
    isShowEdit: false,
}

const LibraryReducer = (state = initialState, action) => {
    let data
    switch (action.type){
        case 'GET_DATA_LIBRARY':
            return {...state, data:action.payload}

        case 'ADD_DATA_LIBRARY' :
            return {...state, data: [...state.data, action.payload]};

        case 'LIBRARIES_SHOW_EDIT':
            return {...state, isShowEdit: true, data: action.payload}

        case 'EDIT_DATA_LIBRARY':
             data = state.data.map((item) => {
                if (item.id === action.payload.id)
                    return action.payload;
                return item;
            })            
            return {...state, data: data}
            
        // case 'HIDE_ADD_LIBRARY':
        //     return { ...state, isShowAdd: false}

        // case 'SHOW_ADD_LIBRARY':
        //     return { ...state, isShowAdd: true}

        default:
        return state;
    }
}

export default LibraryReducer