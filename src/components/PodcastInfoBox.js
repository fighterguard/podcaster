import React from 'react'

const PodcastInfoBox = ({ podcastData }) => (
  <div className="podcast__info-box">
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

export default PodcastInfoBox
