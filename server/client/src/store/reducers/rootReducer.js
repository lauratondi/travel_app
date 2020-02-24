import { combineReducers } from 'redux';
import citiesReducer from './citiesReducer';
import itinerariesReducer from './itinerariesReducer';
import userReducer from './userReducer';
import loginReducer from './loginReducer';

const rootReducer = combineReducers({
    cities: citiesReducer,
    itineraries: itinerariesReducer,
    user: userReducer,
    login: loginReducer
});


export default rootReducer;