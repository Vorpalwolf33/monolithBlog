const authenticateReducer = (state = false, action) => {
    switch(action.type) {
        case "AUTH_SUCCESS":
            state = true
            break
        case "AUTH_FAIL":
            state = false
            break
        default:
            break
    }
    return state;
}

export default authenticateReducer;