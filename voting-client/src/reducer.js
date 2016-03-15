import {Map} from 'immutable';
import ActionTypes from './actionTypes';

function setState(state, newState) {
  return state.merge(newState);
}

export default function(state = Map(), action) {
  switch (action.type) {
    case ActionTypes.SET_STATE:
      return setState(state, action.state);
  }
  return state;
}