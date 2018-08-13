import React from 'react'
import { withRouter } from 'react-router'

const PodcastInfoBox = ({ podcastData, match, history }) => (
  <div
    className="podcast__info-box"
    onClick={() => {history.push(`/podcast/${match.params.podcastId}`)}}
  >
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
  </div>
)

export default withRouter(PodcastInfoBox)
