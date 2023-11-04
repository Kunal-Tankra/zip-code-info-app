const initialState = {
    showData: false,
    data: []
}

export const infoDataReducer = (state=initialState,action)=>{
    switch (action.type) {
        case "UPDATE_DATA":
            
            return {
                showBar: action.payload.showData,
                amount: action.payload.data
            }
    
        default:
            return state
    }
}