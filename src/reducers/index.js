import { combineReducers } from 'redux';

import postReducer from './postReducer';
import homeReducer from './homeReducer';
import aboutReducer from './aboutReducer';
import workReducer from './workReducer';

export default combineReducers({
  post: postReducer,
  home: homeReducer,
  about: aboutReducer,
  work: workReducer
});
