import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from "./Navigation";
import TweetsHome from "./TweetsHome";
import TweetPage from "./TweetContainer";
import NewTweet from "./NewTweet";

class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route path="/tweet/:id" component={TweetPage} />
            <Route path="/newTweet" component={NewTweet} />
            <Route path="/" component={TweetsHome} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App