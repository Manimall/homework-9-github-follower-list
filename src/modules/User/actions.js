import { createAction } from 'redux-actions';

// Реализуйте недостающие экшены

const fetchUserRequest = createAction(`FETCH_USER_REQUEST`);
const fetchUserSuccess = createAction(`FETCH_USER_SUCCESS`);
const fetchUserFailure = createAction(`FETCH_USER_FAILURE`);

export { fetchUserRequest, fetchUserSuccess, fetchUserFailure };

