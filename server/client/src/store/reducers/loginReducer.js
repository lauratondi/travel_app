const LOGIN_REQUEST = 'LOGIN_REQUEST';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_FAILURE = 'LOGIN_FAILURE';

const initialState = {
    loading: true,
    login: {},
    error: ''
}

function loginReducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                loading: true
            }

        case LOGIN_SUCCESS:
            return {
                loading: false,
                login: action.payload,
                error: ''
            }
        case LOGIN_FAILURE:
            return {
                loading: false,
                login: {},
                error: action.payload
            }
        default:
            return state
    }
}

export default loginReducer;