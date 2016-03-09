import makeStore from './src/store';
import startServer from './src/server';
import ActionTypes from './src/actionTypes';

export const store = makeStore();
startServer(store);
store.dispatch({
  type: ActionTypes.SET_ENTRIES,
  entries: require('./entries.json')
});
store.dispatch({type: ActionTypes.NEXT});