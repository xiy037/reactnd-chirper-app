import { getInitialData } from '../utils/api';
import { getTweets } from './tweets';
import { getUsers } from './users';
import { setAuthedUser } from './authedUser';
import { showLoading, hideLoading } from 'react-redux-loading';

const AUTHED_ID = "sarah_edo";

export const handleInitialData = () => (dispatch) => {
  dispatch(showLoading());
   return getInitialData().then(({ users, tweets}) => {
     dispatch(getTweets(tweets));
     dispatch(getUsers(users));
     dispatch(setAuthedUser(AUTHED_ID));
     dispatch(hideLoading());
   });
}