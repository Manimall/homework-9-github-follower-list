import reducer from './reducer';
import { fetchFollowersRequest, fetchFollowersSuccess, fetchFollowersFailure } from "./actions";

const randomAction = {
  type: `RANDOM_ACTION_${parseInt(Math.random() * 1000, 10)}`
};

describe('Reducer Followers', () => {
  const state0 = reducer(undefined, randomAction);

  it('Содержит поле isLoading и data', () => {
    expect(Object.keys(state0)).toEqual(
      expect.arrayContaining(['isLoading', 'data'])
    );
  });

  it('Экшен followers/fetchRequest выставляет флаг isLoading в true', () => {
    expect(reducer(state0, fetchFollowersRequest()).isLoading).toBeTruthy();
  });

  it('Экшен followersfetchSuccess выставляет флаг isLoading в false', () => {
    expect(reducer(state0, fetchFollowersSuccess('test_data')).isLoading).toBeFalsy();
  });

  it('Экшен followersfetchFailure выставляет флаг isLoading в false', () => {
    expect(reducer(state0, fetchFollowersFailure('test_error')).isLoading).toBeFalsy();
  });

  it('Экшен followers/fetchSuccess наполняет своим payload поле data', () => {
    expect(reducer(state0, fetchFollowersSuccess('test_data')).data).toBe('test_data');
  });
});
