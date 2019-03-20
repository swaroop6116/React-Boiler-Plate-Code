import { fromJS } from 'immutable';
import alertDataContainerReducer from '../reducer';

describe('alertDataContainerReducer', () => {
  it('returns the initial state', () => {
    expect(alertDataContainerReducer(undefined, {})).toEqual(fromJS({}));
  });
});
