export const RECEIVE_TWEETS = "RECEIVE_TWEETS";

export const getTweets = (tweets) => ({
  type: RECEIVE_TWEETS,
  tweets
})