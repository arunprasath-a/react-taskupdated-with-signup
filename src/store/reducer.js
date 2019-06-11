
const initialState = {
    userName: "",
    password: "",
    counter: 0,


}

const reducer = (state = initialState, action) => {

    const newState = { ...state };
    //console.log("reducer", action)

    switch (action.type) {
        case "NAME_CHANGE":
            return Object.assign({}, newState, { userName: action.nameValue });
        case "PASS_CHANGE":
            return Object.assign({}, newState, { password: action.passValue });
        case "ON_LOG_OUT":
            return Object.assign({}, newState, { userName: "", password: "" });
        case "ON_INC":
            return Object.assign({}, newState, { counter: newState.counter + 1 });
        case "ON_DEC":
            return Object.assign({}, newState, { counter: newState.counter - 1 });
        default:
            return newState;

    }

}

export default reducer;