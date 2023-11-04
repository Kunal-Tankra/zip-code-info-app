export const alertAction = (showAlert, msg) => {
    return {
        type: "UPDATE_ALERT",
        payload: {

            showAlert,
            msg
        }
    }
}