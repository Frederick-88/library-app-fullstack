const initialState = {
    data: [],
    dataEdit: {},
    isShowAdd: false,
    isShowEdit: false,
    isShowDelete: false,
}

const LibraryReducer = (state = initialState, action) => {
    switch (action.type){
        case 'GET_DATA_LIBRARY':
            return {...state, data:action.payload}

        case 'ADD_DATA_LIBRARY' :
            return {...state, data: [...state.data, action.payload]};

        case 'LIBRARIES_SHOW_EDIT':
            // console.log(action.payload);
            // debugger;
            // DATA EDIT DISINI DIBUAT UNTUK MENGAMBIL DATA BARIS 2. TENGOK EFEK DRI LIBRARY ACTION
            return {...state, isShowEdit: true, dataEdit: action.payload}

        case 'LIBRARIES_HIDE_EDIT':
            return {...state, isShowEdit: false}

        case 'LIBRARIES_SHOW_DELETE':
            return {...state, isShowDelete: true}

        case 'LIBRARIES_HIDE_DELETE':
            return {...state, isShowDelete: false}

        case 'EDIT_DATA_LIBRARY':
            console.log(state.data);
            const data = state.data.map((item) => {
                 
                if (item._id === action.payload._id)
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