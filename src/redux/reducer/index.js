import {combineReducers} from 'redux';
import {reducer} from './productsReducer'
 
const reducers = combineReducers({
   allproducts:reducer
})
export default reducers;