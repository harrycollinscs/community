import { combineReducers } from "redux";
import app from './app.reducer';
import discussions from './discussions.reducer';

export default combineReducers ({ app, discussions });