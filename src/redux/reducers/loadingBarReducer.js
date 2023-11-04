const initialState = {
    showBar: false,
    amount: "0"
}

export const loadingBarReducer = (state=initialState,action)=>{
    switch (action.type) {
        case "UPDATE_BAR":
            
            return {
                showBar: true,
                amount: action.payload
            }
    
        default:
            return initialState
    }
}