import * as types from '../types';
import client from '../contentfulCredentials';

export const homeBackgroundLoading = (isLoading = true) => ({
  type: types.HOME_LOADING,
  payload: isLoading
})

export const homeBackgroundLoadSuccess = data => ({
  type: types.LOAD_HOME_SUCCESS,
  payload: data
});

export const homeVideoBackgroundLoadSuccess = video => ({
  type: types.LOAD_HOME_VIDEO_SUCCESS,
  payload: video
});

export const loadHomeBackground = () => dispatch => {
  dispatch(homeBackgroundLoadSuccess());
  client.getEntry("7m7h78nxhm60026iykCoC0")
    .then(({ fields }) => {
      dispatch(homeBackgroundLoadSuccess(fields));
    })
    .catch(err => {
      console.log(err);
      dispatch(homeBackgroundLoading(false));
    });
}

export const loadVideoHomeBackground = () => dispatch => {
  client.getEntry("7e23iYRVfOAoUQS26sGQuI")
    .then(({fields}) => {
      dispatch(homeVideoBackgroundLoadSuccess(fields));
    });
}
