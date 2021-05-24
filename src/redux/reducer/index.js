import {combineReducers} from 'redux';
import {productsAddNewItemReducer,productsChangeQualityReducer} from './productsReducer'
 
const reducers = combineReducers({
    productsAddNewItemReducer: productsAddNewItemReducer,
    productsChangeQualityReducer : productsChangeQualityReducer,
})
export default reducers;