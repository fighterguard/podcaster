import React, { Component } from 'react'
import { browserHistory } from 'react-router';
import { BrowserRouter as Router, Route,  Switch } from 'react-router-dom'
import { Header, Home, Podcast, PodcastDetails } from './components'
import { GetPodcastList } from './helpers/PodcastInfo.helper'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      podcastList: []
    }
  }

  componentDidMount(){
    const self = this
    GetPodcastList()
    .then(response => {
      self.setState({
        podcastList: response
      })
    })
  }

  render() {
    const { podcastList } = this.state
    return (
      <Router history={browserHistory}>
        <div className="app">
          <Header/>
          <div className="app__content">
            <Switch>
              <Route exact path="/">
                <Home
                  podcastList={podcastList}
                />
              </Route>
              <Route exact path="/podcast/:podcastId" component={Podcast}/>
              <Route path="/podcast/:podcastId/episode/:episodeId" component={PodcastDetails}/>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App
