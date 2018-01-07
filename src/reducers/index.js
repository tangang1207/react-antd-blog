import { home } from "./home";
import admin from './admin/admin';
import {reducer as globalState} from './global_state_reducer';
import {combineReducers} from 'redux';

export default combineReducers({
    home,
    globalState,
    admin
})

