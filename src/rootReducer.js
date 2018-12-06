import { contactReducer } from "./reducer";
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    biddingSystem: contactReducer
});

export default rootReducer;