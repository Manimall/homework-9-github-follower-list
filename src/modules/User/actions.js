import { createActions } from 'redux-actions';

// Реализуйте недостающие экшены


export const { fetchUserRequest,
								fetchUserSuccess,
								fetchUserFailure } = createActions({
	fetchUserRequest: null,
	fetchUserSuccess: null,
	fetchUserFailure: null,
});
