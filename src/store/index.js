import combineReducers from '../reducers/';
// import thunk from 'redux-thunk'
import { createStore, applyMiddleware} from 'redux';
import apiMiddleware from "../actions/api";
let store = applyMiddleware(apiMiddleware);

 export default createStore(combineReducers,store); 