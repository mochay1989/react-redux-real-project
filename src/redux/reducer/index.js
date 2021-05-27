import {combineReducers} from 'redux';
import {initialreducer, cartreducer,currentIDreducer} from './productsReducer'
 
const reducers = combineReducers({
   allData:initialreducer ,
   cartData:cartreducer,
   currentid : currentIDreducer
})
export default reducers;