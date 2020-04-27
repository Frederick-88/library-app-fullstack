const initialState = {
    data: [],
    dataEdit: {},
    dataDelete:{},
    isShowAdd: false,
    isShowEdit: false,
    isShowDelete: false,
}

const LibraryReducer = (state = initialState, action) => {
    // BER ADAPTASI DENGAN ERROR YANG ADA KARENA ADA 2 DATA.
    let data;

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
            return {...state, isShowDelete: true, dataDelete: action.payload}

        case 'LIBRARIES_HIDE_DELETE':
            return {...state, isShowDelete: false}

        case 'EDIT_DATA_LIBRARY':
            console.log(state.data);
             data = state.data.map((item) => {
                 
                if (item._id === action.payload._id)
                    return action.payload;
                return item;
            })            
            return {...state, data: data}

        case 'DELETE_DATA_LIBRARY':
            console.log(state.data);
             data = state.data.filter((item) => {
                     
                if (item._id === action.payload._id)
                    return false;
                return true;
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