import { saveLikeToggle } from '../utils/api'

export const RECEIVE_TWEETS = "RECEIVE_TWEETS";
export const TOGGLE_TWEET = "TOGGLE_TWEET";

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

export const handleToggleTweet = (info) => (dispatch) => {
  dispatch(toggleTweet(info));

  return saveLikeToggle(info)
          .catch((err) => {
            console.warn("Error in handleToggleTweet: ", err);
            dispatch(toggleTweet(info));
            alert("Failed to toggle tweet, try again!");
          })
}

