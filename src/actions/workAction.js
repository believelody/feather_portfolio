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

export const loadWorks = content_type => dispatch => {
  dispatch(workLoading());
  client.getEntries({ 'content_type': content_type })
    .then(({items}) => {
      // console.log(items);
      dispatch(loadWorksSuccess(items));
    })
    .catch(err => {
      console.log(err);
      dispatch(workLoading(false));
    });
}
