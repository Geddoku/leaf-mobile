const SET_PASSWORD = "SET_PASSWORD"
const SET_EMAIL = "SET_EMAIL"
const SET_USERNAME = "SET_USERNAME"

let initialState = {
    password: '',
    email: '',
    username: '',
}

const registrationReducer = (state = initialState, action) => {
    console.log(action);
    switch (action.type) {

        case SET_PASSWORD:
            return {
                ...state,
                password: action.data
            }
        case SET_EMAIL:
            return {
                ...state,
                email: action.data
            }
        case SET_USERNAME:
            return {
                ...state,
                username: action.data
            }


        default:
            return state
    }

}


export const setPasswordAC = (data) => ({type: SET_PASSWORD, data});
export const setEmailAC = (data) => ({type: SET_EMAIL, data});
export const setUsernameAC = (data) => ({type: SET_USERNAME, data});
export default registrationReducer;
