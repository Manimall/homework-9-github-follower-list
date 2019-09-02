import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { addApiKey } from './actions';


const apiKey = handleActions({
	[addApiKey]: (_state, action) => action.payload
}, null);

export default combineReducers({
	apiKey,
});

const getIsAuthorized = state => !!state.auth.apiKey;
const getApiKey = state => state.auth.apiKey;

export { getApiKey, getIsAuthorized };

// В этом редьюсере вам нужно будет обрабатывать addApiKey экшен.

// Имеет смысл определить селекторы
// getIsAuthorized, getApiKey
