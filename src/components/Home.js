import React from 'react'
import { Link } from 'react-router-dom'
import PodcastBox from './PodcastBox'

export default class Home extends React.Component{
  render(){
    const { podcastList } = this.props
    return (
      <div className="podcaster__home">
      <div className="podcaster__search-bar">
      </div>
        <div className="podcaster__home__list-container">
          <div className="podcaster__home__list">
            {
              podcastList.map(podcast => (
                <PodcastBox
                  podcast={podcast}
                  key={podcast.id.attributes['im:id']}
                />
              ))
            }
          </div>
        </div>
        <Link to='/podcast/123'>Podcast 123</Link>
      </div>
    )
  }
}
