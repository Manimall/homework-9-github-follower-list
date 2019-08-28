import { takeLatest, select, put, call, fork } from 'redux-saga/effects';
import { fetchFollowersRequest, fetchFollowersSuccess } from "./actions";
import { getFollowersInfo } from './api';
import { getApiKey  } from '../Auth';


function* fetchFollowersWatcher() {
  yield takeLatest(fetchFollowersRequest, fetchFollowersFlow); // Замените вопросительный знак на подходящий экшен
}

export function* fetchFollowersFlow(action) {
  // Реализуйте загрузку данных
  // Используйте экшены FETCH_SUCCESS / FETCH_FAILURE

  const apiKey = yield select(getApiKey);

  try {
    const result = yield call(getFollowersInfo, apiKey, action.payload);
    console.log(result);
    yield put(fetchFollowersSuccess(result));
  }
  catch(error) {
    console.log(error);
    yield put(fetchFollowersSuccess(error));
  }
}

export default function*() {
  yield fork(fetchFollowersWatcher);
}
