import { combineReducers } from 'redux';
import tweetsReducer from './tweets';
import usersReducer from './users';
import authedUserReducer from './authedUser';

export default combineReducers({
  tweets: tweetsReducer,
  users: usersReducer,
  authedUser: authedUserReducer
})