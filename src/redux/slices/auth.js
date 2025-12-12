import { createSlice } from '@reduxjs/toolkit';
import {
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT,
    CHECK_AUTH,
    GET_ROLES
} from '../../actions/types';

const initialState = {
    isAuthenticated: false,
    user: null,
    roles: [],
    loading: false,
    error: null
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuthenticated: (state, action) => {
            state.isAuthenticated = action.payload;
        },
        setUser: (state, action) => {
            state.user = action.payload;
        },
        setRoles: (state, action) => {
            state.roles = action.payload;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
        logout: (state) => {
            state.isAuthenticated = false;
            state.user = null;
            state.roles = [];
            state.error = null;
        }
    }
});

export const { setAuthenticated, setUser, setRoles, setLoading, setError, logout } = authSlice.actions;
export default authSlice.reducer;
