const SET_LOGIN_PASSWORD = "SET_LOGIN_PASSWORD"
const SET_LOGIN_USERNAME= "SET_LOGIN_USERNAME"

let initialState = {
    password: '',
    username: '',
}

const loginReducer = (state = initialState, action) => {
    console.log(state)
    switch (action.type) {

        case SET_LOGIN_PASSWORD:
            return {
                ...state,
                password: action.data
            }
        case SET_LOGIN_USERNAME:
            return {
                ...state,
                username: action.data
            }

        default:
            return state
    }

}


export const setLoginPasswordAC = (data) => ({type: SET_LOGIN_PASSWORD, data});
export const setLoginUsernameAC = (data) => ({type: SET_LOGIN_USERNAME, data});
export default loginReducer;
