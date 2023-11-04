const initialState = {
    showData: false,
    data: {}
}

export const infoDataReducer = (state=initialState,action)=>{
    switch (action.type) {
        case "UPDATE_DATA":
            
            return {
                showData: action.payload.showData,
                data: action.payload.data
            }
    
        default:
            return state
    }
}