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

export const loadHomeBackground = () => dispatch => {
  dispatch(homeBackgroundLoadSuccess());
  client.getEntries()
    .then(({ items }) => {
      // console.log(items[0].fields);
      // dispatch(homeBackgroundLoading(false))
      dispatch(homeBackgroundLoadSuccess(items[0].fields))
    })
    .catch(err => {
      console.log(err);
      dispatch(homeBackgroundLoading(false));
    });
}
