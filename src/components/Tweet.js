import React from 'react';
import { NavLink } from 'react-router-dom';

class Tweet extends React.Component {

  render() {
    return (
      <NavLink to="/tweet/123">
        <div className="tweet">
        Tweet
        </div>
      </NavLink>
    )
  }
}

export default Tweet;