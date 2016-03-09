import {setEntries, next, vote, INITIAL_STATE} from './core';
import ActionTypes from './actionTypes';

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ActionTypes.SET_ENTRIES:
      return setEntries(state, action.entries);
    case ActionTypes.NEXT:
      return next(state);
    case ActionTypes.VOTE:
      return state.update('vote', voteState => vote(voteState, action.entry));
  }
  return state;
}