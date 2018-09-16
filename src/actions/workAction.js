import * as types from '../types';
import client from '../contentfulCredentials';


export const workLoading = (isLoading = true) => ({
  type: types.WORK_LOADING,
  payload: isLoading
});

export const loadWorksSuccess = data => ({
  type: types.LOAD_WORKS_SUCCESS,
  payload: data
});

export const loadVideos = videos => ({
  type: types.LOAD_VIDEOS_SUCCESS,
  payload: videos
});

export const loadPhotos = photos => ({
  type: types.LOAD_PHOTOS_SUCCESS,
  payload: photos
});

export const loadWorks = content_type => dispatch => {
  dispatch(workLoading());
  client.getEntries({ 'content_type': content_type })
    .then(({items}) => {
      switch (content_type) {
        case 'video':
          dispatch(loadVideos(items));
          break;
        case 'photo':
          dispatch(loadPhotos(items));
          break;
        default:
          return {};
      }
    })
    .catch(err => {
      console.log(err);
      dispatch(workLoading(false));
    });
};

export const clearWorks = () => dispatch => dispatch({
  type: types.CLEAR_WORKS
});
