import React from 'react';
import { NavLink } from 'react-router-dom';
import { formatTweet, formatDate } from '../utils/helpers';
import { connect } from 'react-redux';
import { TiArrowBackOutline, TiHeartOutline, TiHeartFullOutline } from 'react-icons/ti';
import { handleToggleTweet } from '../actions/tweets'

class Tweet extends React.Component {

  toParent = (e, parentId) => {
    e.preventDefault();
    //todo
  }

  handleLike = (e) => {
    e.preventDefault();
    const { tweet, authedUser } = this.props;
    this.props.dispatch(handleToggleTweet({
      id: tweet.id,
      hasLiked: tweet.hasLiked,
      authedUser
    }));
  }

  render() {
    const { tweet } = this.props;
    const {
      name, avatar, timestamp, text, hasLiked, likes, replies, parent
    } = tweet
    return (
      <NavLink to="/tweet/123">

        {tweet && (
          <div className="tweet">
            <img
              src={avatar}
              alt={`avatar of ${name}`}
              className="avatar"
            />
            <div className="tweet-info">
              <div>
                <div>{name}</div>
                <div>{formatDate(timestamp)}</div>
                {parent && (
                  <button className="replying-to" onClick={(e) => this.toParent(e, parent.id)}>
                    Replying to @{parent.author}
                  </button>
                )}
                <p>{text}</p>
              </div>
              <div className="tweet-icons">
                <TiArrowBackOutline className="tweet-icon" />
                <span>{replies > 0 && replies}</span>
                <button className="heart-button" onClick={this.handleLike}>
                  {hasLiked === true
                    ? <TiHeartFullOutline color='#e0245e' className='tweet-icon' />
                    : <TiHeartOutline className='tweet-icon' />}
                </button>
                <span>{likes !== 0 && likes}</span>
              </div>
            </div>
          </div>
        )}

      </NavLink>
    )
  }
}

const mapStateToProps = ({ tweets, users, authedUser }, { id }) => {
  const tweet = tweets[id];
  const parentTweet = tweet ? tweets[tweet.replyingTo] : null;
  return {
    authedUser,
    tweet: tweet ? formatTweet(tweet, users[tweet.author], authedUser, parentTweet) : null
  }
}

export default connect(mapStateToProps)(Tweet);