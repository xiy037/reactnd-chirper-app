import { combineReducers } from 'redux';
import tweetsReducer from './tweets';
import usersReducer from './users';
import authedUserReducer from './authedUser';
import { loadingBarReducer } from 'react-redux-loading';

export default combineReducers({
  tweets: tweetsReducer,
  users: usersReducer,
  authedUser: authedUserReducer,
  loadingBar: loadingBarReducer
})