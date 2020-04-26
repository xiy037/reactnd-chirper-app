import { getInitialData } from '../utils/api';
import { getTweets } from './tweets';
import { getUsers } from './users';
import { setAuthedUser } from './authedUser';

const AUTHED_ID = "sarah_edo";

export const handleInitialData = () => (dispatch) => {
   return getInitialData().then(({ users, tweets}) => {
     dispatch(getTweets(tweets));
     dispatch(getUsers(users));
     dispatch(setAuthedUser(AUTHED_ID));
   });
}