import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { fetchUserRequest, fetchUserFailure, fetchUserSuccess } from './actions';
// import {createSelector} from "reselect";


const data = handleActions({
	[fetchUserSuccess]: (_state, action) => action.payload,
	[fetchUserFailure]: (_state, action) => action.payload,
}, null);

const isLoading = handleActions({
	[fetchUserRequest]: () => true,
	[fetchUserSuccess]: () => false,
	[fetchUserFailure]: () => false,
}, false);


export default combineReducers({
	data,
	isLoading,
});

export const getUserData = (state) => state.user.data;
export const getIsLoading = (state) => state.user.isLoading;
