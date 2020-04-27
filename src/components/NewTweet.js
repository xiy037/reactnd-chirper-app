import React from 'react';
import {connect} from 'react-redux';
import {handleAddTweet} from '../actions/tweets'

class NewTweet extends React.Component {
  state = {
    text: ""
  }

  handleChange = (e) => {
    const text = e.target.value;
    this.setState({
      text
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const {text} = this.state;
    const {dispatch, id} = this.props;
    dispatch(handleAddTweet(text, id));
    this.setState({
      text: ""
    })
    //todo: redirect to homeview if submitted
  }
  render() {
    const { text } = this.state;
    const tweetLeft = 280 - text.length;
    return (
      <div>
        <h3 className="center">Compose New Tweet</h3>
        <form className="new-tweet" onSubmit={this.handleSubmit}>
          <textarea 
            className="textarea"
            placeholder="New Tweet..."
            maxLength={280}
            value={text}
            onChange={this.handleChange}
          />
          {tweetLeft <= 100 && (
            <div className="tweet-length">
              {tweetLeft}
            </div>
          )}
          <button
            className="btn"
            type="submit"
            disabled={text === ""}
          >
            Submit
          </button>
        </form>
      </div>
    )
  }
}

export default connect()(NewTweet);