import reducer from './DetailReducer';
import {
    combineReducers
} from 'redux';

export default combineReducers({
    movies: reducer
});