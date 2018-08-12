import React from 'react'

export default class Podcast extends React.Component{
  render(){
    const { podcastId, episodeId } = this.props.match.params;
    return (
      <div>Podcast {podcastId} Episode {episodeId}</div>
    )
  }
}
