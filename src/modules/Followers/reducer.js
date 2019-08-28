import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { fetchFollowersRequest, fetchFollowersSuccess, fetchFollowersFailure } from "./actions";


const isLoading = handleActions({
	[fetchFollowersRequest]: () => true,
	[fetchFollowersSuccess]: () => false,
	[fetchFollowersFailure]: () => false,
}, false);

const data = handleActions({
	[fetchFollowersSuccess]: (_state, action) => action.payload,
	[fetchFollowersFailure]: (_state, action) => action.payload,
}, null);

const getData = (state) => {
	console.log(state);
};

export default combineReducers({
	data,
	isLoading,
});

export const getFollowersData = (state) => state.followers.data;
export const getIsLoading = (state) => state.followers.isLoading;
