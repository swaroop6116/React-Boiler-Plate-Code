import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the alertDataContainer state domain
 */

const selectAlertDataContainerDomain = state =>
  state.get('alertDataContainer', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by AlertDataContainer
 */

const makeSelectAlertDataContainer = () =>
  createSelector(selectAlertDataContainerDomain, substate => substate.toJS());

export default makeSelectAlertDataContainer;
export { selectAlertDataContainerDomain };
