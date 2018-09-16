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
  // Get entry by id
  client.getEntry("7m7h78nxhm60026iykCoC0")
    .then(({ fields }) => {
      dispatch(homeBackgroundLoadSuccess(fields));
    })
    .catch(err => {
      console.log(err);
      dispatch(homeBackgroundLoading(false));
    });

  // Get entries by content type
  // client.getEntries({ 'content_type': 'homeBackground' })
  //   .then(({items}) => {
  //     console.log(items);
  //     dispatch(homeBackgroundLoadSuccess(items[0].fields));
  //   })
  //   .catch(err => {
  //     console.log(err);
  //     dispatch(homeBackgroundLoading(false));
  //   });
}
