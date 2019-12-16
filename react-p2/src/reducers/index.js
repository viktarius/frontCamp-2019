import {combineReducers} from "redux";
import sort from './sort';
import search from './search';
import error from './error';
const rootReducer = combineReducers({sort, search, error});

export default rootReducer;
