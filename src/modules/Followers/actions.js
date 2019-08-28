import { createAction } from 'redux-actions';

// Здесь не хватает экшенов для модуля FOLLOWERS.
// FETCH_REQUEST, FETCH_SUCCESS, FETCH_FAILURE

const fetchFollowersRequest = createAction('FETCH_FOLLOWERS_REQUEST');
const fetchFollowersSuccess = createAction('FETCH_FOLLOWERS_SUCCESS');
const fetchFollowersFailure = createAction('FETCH_FOLLOWERS_FAILURE');

export { fetchFollowersRequest, fetchFollowersSuccess, fetchFollowersFailure };
