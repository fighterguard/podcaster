import React from 'react'
import { withRouter } from 'react-router'
import { GetPodcastDetails } from '../helpers/PodcastInfo.helper'

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
    const { podcastData } = this.state;
    return (
      <div className="podcast__left-panel">
        {podcastData &&
        (<div className="podcast__info-box">
          <img
            src={podcastData.attributes.artworkUrl600}
            className="podcast__image"
          />
          <div className="podcaster__horizontal-bar"/>
          <div className="podcast__title">
            {podcastData.attributes.collectionName}
          </div>
          <div className="podcast__author">
            {`by ${podcastData.attributes.artistName}`}
          </div>
          <div className="podcaster__horizontal-bar"/>
          <div className="podcast__title">
            Description:
          </div>
          <div
            className="podcast__author"
            dangerouslySetInnerHTML={{__html: podcastData.feed.description}}
          />
        </div>)}
      </div>
    )
  }
}

export default withRouter(Podcast)
