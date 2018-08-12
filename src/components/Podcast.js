import React from 'react'
import { withRouter } from 'react-router'
import { GetPodcastDetails } from '../helpers/PodcastInfo.helper'

class Podcast extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      podcastData: {}
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
    const { podcastId } = this.props.match.params;
    return (
      <div>
        <h3>Podcast {podcastId}</h3>
      </div>
    )
  }
}

export default withRouter(Podcast)
