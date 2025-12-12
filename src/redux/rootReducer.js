// ** Reducers Imports
import { combineReducers } from '@reduxjs/toolkit';
import auth from './slices/auth';
import message from './slices/message';
import job from './slices/job';
import map from './slices/map';
import information from './slices/information';

const rootReducer = combineReducers({
    auth,
    message,
    job,
    map,
    information
});

export default rootReducer;
