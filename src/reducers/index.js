import { combineReducers } from 'redux';

import postReducer from './postReducer';
import homeReducer from './homeReducer';

export default combineReducers({
  post: postReducer,
  home: homeReducer
});
