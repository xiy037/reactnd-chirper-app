import React from 'react';
import Tweet from './Tweet';
import {connect} from 'react-redux';

class TweetsHome extends React.Component {

  render() {
    console.log(this.props);
    return (
      <div>
        <h3 className='center'>Your Timeline</h3>
        <ul className='dashboard-list'>
          {this.props.tweetIds.map((el) => (
            <li key={el}>
              tweetid: {el}
              <Tweet />
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = ({tweets}) => ({
  tweetIds: Object.keys(tweets).sort((a, b) => tweets[b].timestamp - tweets[a].timestamp)
})

export default connect(mapStateToProps)(TweetsHome);