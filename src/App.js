import React, { Component } from 'react'
import { browserHistory } from 'react-router';
import { BrowserRouter as Router, Route,  Switch } from 'react-router-dom'
import { Header, Home, Podcast } from './components'
import { GetPodcastList } from './helpers/PodcastInfo.helper'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      podcastList: [],
      isLoading: true
    }

    this.setLoading = this.setLoading.bind(this)
  }

  componentDidMount(){
    const self = this
    GetPodcastList()
    .then(response => {
      self.setState({
        podcastList: response,
        isLoading: false
      })
    })
  }

  setLoading(value){
    this.setState({
      isLoading: value
    })
  }

  render() {
    const { podcastList, isLoading } = this.state
    return (
      <Router history={browserHistory}>
        <div className="app">
          <Header
            isLoading={isLoading}
          />
          <div className="app__content">
            <Switch>
              <Route exact path="/">
                <Home
                  podcastList={podcastList}
                />
              </Route>
              <Route path="/podcast/:podcastId">
                <Podcast
                  setLoading={this.setLoading}
                />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App
