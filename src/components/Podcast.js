import React from 'react'
import { Link } from 'react-router-dom'

export default class Podcast extends React.Component{
  render(){
    const { podcastId } = this.props.match.params;
    return (
      <div>
        <h3>Podcast {podcastId}</h3>
        <Link to='/podcast/123/episode/456'>Episode 456</Link>
      </div>
    )
  }
}
