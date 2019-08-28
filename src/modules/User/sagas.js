import { takeLatest, select, put, call, fork } from 'redux-saga/effects';
import { fetchUserRequest, fetchUserSuccess } from './actions';
import { getUserInfo } from './api';
import { getApiKey  } from '../Auth';


function* fetchUserWatcher() {
  yield takeLatest(fetchUserRequest, fetchUserFlow);
}

export function* fetchUserFlow(action) {
  const apiKey = yield select(getApiKey);

  try {
    const result = yield call(getUserInfo, apiKey, action.payload);
    console.log(result);
    yield put(fetchUserSuccess(result));
  }
  catch(error) {
    yield put(fetchUserSuccess(error));
  }
}

export default function*() {
  yield fork(fetchUserWatcher);
}
