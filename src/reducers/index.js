import { combineReducers } from 'redux';

import postReducer from './postReducer';
import homeReducer from './homeReducer';
import aboutReducer from './aboutReducer';
import workReducer from './workReducer';
import resumeReducer from './resumeReducer';

export default combineReducers({
  post: postReducer,
  home: homeReducer,
  about: aboutReducer,
  work: workReducer,
  resume: resumeReducer,
});
