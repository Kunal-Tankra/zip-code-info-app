export const loadingBarAction = (amount=0)=>{
    return {
        type: "UPDATE_BAR",
        payload: `${amount}`
    }
}