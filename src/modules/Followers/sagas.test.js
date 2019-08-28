import { fetchFollowersFlow } from './sagas';
import { select, call, put } from 'redux-saga/effects';
import { getApiKey } from '../Auth';
import { fetchFollowersRequest, fetchFollowersSuccess } from './actions';
import { getFollowersInfo } from './api';

describe('fetchFollowersFlow', () => {
  const iterator = fetchFollowersFlow(fetchFollowersRequest('test'));

  it('Первый yield — select(getApiKey)', () => {
    expect(iterator.next().value).toEqual(select(getApiKey));
  });

  it('Второй yield — call(getFollowersInfo, apiKey, username)', () => {
    expect(iterator.next('test_key').value).toEqual(
      call(getFollowersInfo, 'test_key', 'test')
    );
  });

  it('Третий yield — put(fetchSuccess(response))', () => {
    expect(iterator.next('test_key').value).toEqual(
      put(fetchFollowersSuccess('test_key'))
    );
  });
});
