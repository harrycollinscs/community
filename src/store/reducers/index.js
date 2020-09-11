import { combineReducers } from "redux";
import discussions from './discussions.reducer';
import tags from './tags.reducer'

export default combineReducers ({ discussions, tags });