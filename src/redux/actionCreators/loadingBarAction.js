export const loadingBarAction = (amount, showBar) => {
    return {
        type: "UPDATE_BAR",
        payload: {
            amount,
            showBar
        }
    }
}