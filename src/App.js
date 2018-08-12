import React, { Component } from 'react'
import { browserHistory } from 'react-router';
import { BrowserRouter as Router, Route,  Switch } from 'react-router-dom'
import { Header, Home, Podcast, PodcastDetails } from './components';

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <div className="App">
          <Header/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/podcast/:podcastId" component={Podcast}/>
            <Route path="/podcast/:podcastId/episode/:episodeId" component={PodcastDetails}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App
