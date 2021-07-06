const initialState={
    count:0
}

const NameReducer = (state=initialState, action) => {
    if(action.type=="addname"){
        return{
            ...state,
            count:state.count+1
        }
    }


    return state;
}

export default NameReducer;

