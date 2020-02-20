const FETCH_USER_REQUEST = 'FETCH_USER_REQUEST';
const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCES';
const FETCH_USER_FAILURE = 'FETCH_USER_FAILURE';

const initialState = {
    loading: true,
    user: [],
    error: ''
}

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_USER_REQUEST:
            return {
                ...state,
                loading: true
            }

        case FETCH_USER_SUCCESS:
            return {
                loading: false,
                user: action.payload,
                erro: ''
            }

        case FETCH_USER_FAILURE:
            return {
                loading: false,
                user: [],
                error: action.payload
            }

        default:
            return state
    }
};