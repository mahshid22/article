import { combineReducers } from 'redux';
import  Articles from './Articles';
import Comments from './comments';
import User from './user'

export default  combineReducers({
    Articles,
    Comments,
    User,
});