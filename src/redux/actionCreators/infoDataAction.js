export const infoDataAction = (showData, data) => {
    return {
        type: "UPDATE_DATA",
        payload: {

            showData,
            data
        }
    }
}