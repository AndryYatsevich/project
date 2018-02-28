import {combineReducers} from 'redux';
import loadSessionReducer from './components/session/reducer';

export default combineReducers({
    loadSession: loadSessionReducer,

});