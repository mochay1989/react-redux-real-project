import {combineReducers} from 'redux';
import {reducer} from './productsReducer'
 
const reducers = combineReducers({
   allData:reducer
})
export default reducers;