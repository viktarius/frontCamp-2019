import {combineReducers} from "redux";
import sort from './sort';
import search from './search'
const rootReducer = combineReducers({sort, search});

export default rootReducer;
