import { combineReducers, compose } from 'redux';
import dataReducer from './data_reducer';



const rootReducer = combineReducers({
    data:dataReducer
});

export default rootReducer;