import ActionTypes from './actionTypes';

export function setState(state) {
  return {
    type: ActionTypes.SET_STATE,
    state: state
  };
}

export function vote(entry) {
  return {
    meta: {remote: true},
    type: ActionTypes.VOTE,
    entry: entry
  };
}

export function next() {
  return {
    meta: {remote: true},
    type: ActionTypes.NEXT
  };
}