import React from 'react'
import { withRouter } from 'react-router'

class PodcastBox extends React.Component{
  constructor(props){
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(podcastId){
    this.props.history.push(`/podcast/${podcastId}`)
  }

  render(){
    const { podcast } = this.props
    let name = podcast['im:name'].label
    let author = podcast['im:artist'].label
    let image = podcast['im:image'][2].label
    let id = podcast.id.attributes['im:id']
    const maxLength = 47

    if(name.length > maxLength){
      name = `${name.substring(0, (maxLength - 3)).trim()}...`
    }
    return (
      <div
        className="podcast-box"
        title={podcast['im:name'].label}
        onClick={() => this.handleClick(id)}
      >
        <img className="podcast-box__image" src={image}/>
        <div className="podcast-box__text">
          <div className="podcast-box__name">{name}</div>
          <div className="podcast-box__author">{`Author: ${author}`}</div>
        </div>
      </div>
    )
  }
}

export default withRouter(PodcastBox)
