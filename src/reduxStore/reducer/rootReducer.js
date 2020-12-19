import { combineReducers } from 'redux';
import  periodicals from './periodicals';
import  frequency from './frequency';
export default combineReducers({
    periodicals,
    frequency
})