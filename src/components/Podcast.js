import React, { Fragment } from 'react'
import { withRouter } from 'react-router'
import { Route,  Switch } from 'react-router-dom'
import { GetPodcastDetails } from '../helpers/PodcastInfo.helper'
import { PodcastList, PodcastInfoBox, Episode } from './'

class Podcast extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      podcastData: null
    }
  }

  componentDidMount(){
    const self = this
    self.props.setLoading(true)
    GetPodcastDetails(self.props.match.params.podcastId)
    .then(response => {
      self.setState({
        podcastData: response
      })
      self.props.setLoading(false)
    })
  }

  render(){
    const { podcastData } = this.state
    return (
      <div className="podcast__container">
      {podcastData &&
        <Fragment>
        <div className="podcast__left-panel">
          <PodcastInfoBox
            podcastData={podcastData}
          />
        </div>
        <div className="podcast__right-panel">
            <Switch>
              <Route exact path="/podcast/:podcastId">
                <PodcastList
                  list={podcastData.feed.items}
                />
              </Route>
              <Route path="/podcast/:podcastId/episode/:episodeId">
                <Episode
                  list={podcastData.feed.items}
                />
              </Route>
            </Switch>
        </div>
        </Fragment>
      }
      </div>
    )
  }
}

export default withRouter(Podcast)
