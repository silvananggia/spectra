// ** Reducers Imports
import { combineReducers } from '@reduxjs/toolkit';
import auth from './slices/auth';
import message from './slices/message';
import job from './slices/job';
import map from './slices/map';
import information from './slices/information';
import product from './slices/product';

const rootReducer = combineReducers({
    auth,
    message,
    job,
    map,
    information,
    product
});

export default rootReducer;
