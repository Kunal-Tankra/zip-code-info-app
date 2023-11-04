const initialState = {
    showAlert: false,
    msg: ""
}
export const alertReducer = (state=initialState,action)=>{
    switch (action.type) {
        case 'UPDATE_ALERT':
            
            return {
                showAlert: action.payload.showAlert,
                msg: action.payload.msg
            }
    
        default:
            return state
    }
}