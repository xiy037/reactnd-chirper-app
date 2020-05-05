# React-Twitter Project

## A Guide for the Planning Stages of Your Project

1. Identify What Each View Should Look Like
2. Break Each View Into a Hierarchy of Components
3. Determine What Events Happen in the App
4. Determine What Data Lives in the Store



Project website:  https://tylermcginnis.com/projects/redux-twitter/

## Dashboard View Requirements

- is located at the home route (`/`)
- shows tweets sorted from most recently added at the top, to oldest at the bottom
- each tweet will show:
  - the author
  - the time stamp
  - who the author is replying to
  - the text of the tweet
  - a reply button - with the number of replies (if higher than 0)
  - a like button - with the number of likes (if higher than 0)



# View for the Tweet Page

## Tweet Page View Requirements

- is located at `/tweet/:id`
- shows an individual tweet
  - the author
  - the time stamp
  - a reply button - with the number of replies (if higher than 0)
  - a like button - with the number of likes (if higher than 0)
- has a reply form
- shows all replies



# View for Creating a New Tweet

## The New Tweet View Requirements

- is located at `/new`
- has a textbox for adding a new tweet



## Components

- App
- Navigation
- Tweets List-- data from store: tweets list
- Tweet Container
- Tweet --data from store: authedUser, 根据id拿到所有replies
- New Tweet --data from store: authedUser; own state: new text

```react
function handleAddTweet(text, replyingTo) {
  return (dispatch, getState) => {
    const { authedUser } = getState();

    return saveTweetToDatabase({
      text,
      author: authedUser,
      replyingTo
    }).then(tweet => dispatch(addTweet(tweet)));
  };
}
```

具体分布

- App
  - Nav: to "/", to "/New Tweet"
  - Routes：“/” -- TweetList
  - Route：”/NewTweet“-- New Tweet
  - Route: "/tweet/:id" -- Tweet Container
    - Tweet
    - reply list

## Store

- tweets
- users
- authedUser



