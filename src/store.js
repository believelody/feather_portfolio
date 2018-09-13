import { createStore, applyMiddleware } from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducers';

export default (initialState) => createStore(
  rootReducer,
  initialState,
  composeWithDevTools(
    applyMiddleware(
      thunk,
      reduxImmutableStateInvariant()
    )
  )
);
