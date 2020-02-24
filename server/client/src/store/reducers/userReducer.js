const USER_REQUEST = 'USER_REQUEST';
const USER_SUCCESS = 'USER_SUCCES';
const USER_FAILURE = 'USER_FAILURE';

const initialState = {
    loading: true,
    user: [],
    error: ''
}

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case USER_REQUEST:
            return {
                ...state,
                loading: true
            }

        case USER_SUCCESS:
            return {
                loading: false,
                user: action.payload,
                erro: ''
            }

        case USER_FAILURE:
            return {
                loading: false,
                user: [],
                error: action.payload
            }

        default:
            return state
    }
};