import * as types from '../types';
import client from '../contentfulCredentials';

const resumeLoading = (isLoading = true) => ({
  type: types.RESUME_LOADING,
  payload: isLoading
});

const loadResumeSuccess = resume => ({
  type: types.LOAD_RESUME_SUCCESS,
  payload: resume
});

export const loadResume = () => dispatch => {
  dispatch(resumeLoading());
  client.getEntries({'content_type': 'competence'})
    .then(({items}) => {
      dispatch(loadResumeSuccess(items));
    })
    .catch(err => dispatch(resumeLoading(false)));
}
