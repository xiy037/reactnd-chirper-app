import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from "./Navigation";
import TweetsHome from "./TweetsHome";
import TweetPage from "./TweetContainer";
import NewTweet from "./NewTweet";
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import LoadingBar from 'react-redux-loading'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <div className="container">
            <Nav />
            {
              this.props.loading === true
                ? <div>loading...</div>
                : <Switch>
                  <Route path="/tweet/:id" component={TweetPage} />
                  <Route path="/newTweet" component={NewTweet} />
                  <Route path="/" component={TweetsHome} />
                </Switch>
            }

          </div>
        </Fragment>
      </Router>
    )
  }
}

const mapStateToProps = ({ authedUser }) => ({
  loading: authedUser === null
})

export default connect(mapStateToProps)(App);