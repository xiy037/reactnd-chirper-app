import { saveLikeToggle, saveTweet } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading'

export const RECEIVE_TWEETS = "RECEIVE_TWEETS";
export const TOGGLE_TWEET = "TOGGLE_TWEET";
export const ADD_TWEET = "ADD_TWEET";

export const getTweets = (tweets) => ({
  type: RECEIVE_TWEETS,
  tweets
})

const toggleTweet = ({ id, authedUser, hasLiked }) => ({
  type: TOGGLE_TWEET,
  id,
  authedUser,
  hasLiked
})

const addTweet = (tweet) => ({
  type: ADD_TWEET,
  tweet
})

export const handleAddTweet = (text, replyingTo) => (dispatch, getState) => {
  dispatch(showLoading());
  const { authedUser } = getState();
  return saveTweet({
    text,
    author: authedUser,
    replyingTo
  }).then((tweet) => {
    dispatch(addTweet(tweet));
  }).then(() => dispatch(hideLoading()))
}

export const handleToggleTweet = (info) => (dispatch) => {
  dispatch(toggleTweet(info));

  return saveLikeToggle(info)
          .catch((err) => {
            console.warn("Error in handleToggleTweet: ", err);
            dispatch(toggleTweet(info));
            alert("Failed to toggle tweet, try again!");
          })
}

