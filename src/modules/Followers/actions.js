import { createActions } from 'redux-actions';

// Здесь не хватает экшенов для модуля FOLLOWERS.
// FETCH_REQUEST, FETCH_SUCCESS, FETCH_FAILURE


export const { fetchFollowersRequest,
							 fetchFollowersSuccess,
							 fetchFollowersFailure } = createActions({
		fetchFollowersRequest: null,
		fetchFollowersSuccess: null,
		fetchFollowersFailure: null,
});
