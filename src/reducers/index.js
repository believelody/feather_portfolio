import { combineReducers } from 'redux';

import postReducer from './postReducer';
import homeReducer from './homeReducer';
import photoReducer from './photoReducer';
import videoReducer from './videoReducer';
import workReducer from './workReducer';

export default combineReducers({
  post: postReducer,
  home: homeReducer,
  photo: photoReducer,
  video: videoReducer,
  work: workReducer
});
