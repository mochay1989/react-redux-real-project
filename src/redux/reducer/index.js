import {combineReducers} from 'redux';
import {initialreducer, cartreducer} from './productsReducer'
 
const reducers = combineReducers({
   allData:initialreducer ,
   cartData:cartreducer
})
export default reducers;