import ActionTypes from './actionTypes';

export function setState(state) {
  return {
    type: ActionTypes.SET_STATE,
    state: state
  };
}

export function vote(entry) {
  return {
    type: ActionTypes.VOTE,
    entry: entry
  };
}