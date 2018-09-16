import * as types from '../types';
import client from '../contentfulCredentials';

export const videoLoading = (isLoading = true) => ({
  type: types.VIDEO_LOADING,
  payload: isLoading
});

export const loadVideoSuccess = videos => ({
  type: types.LOAD_VIDEOS_SUCCESS,
  payload: videos
});

export const loadVideos = () => dispatch => {
  // client.getEntry("7e23iYRVfOAoUQS26sGQuI")
  //   .then(({fields}) => {
  //     dispatch(homeVideoBackgroundLoadSuccess(fields));
  //   });
  dispatch(videoLoading());
  client.getEntries({ 'content_type': 'homePageBackgroundVideo' })
    .then(({items}) => {
      // console.log(items);
      dispatch(loadVideoSuccess(items));
    })
    .catch(err => {
      console.log(err);
      dispatch(videoLoading(false));
    });
}
