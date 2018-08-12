import React from 'react'
import { Link } from 'react-router-dom'

export default class Home extends React.Component{
  render(){
    const { podcast, match, location, history } = this.props
    let name = podcast['im:name'].label
    let author = podcast['im:artist'].label
    let image = podcast['im:image'][2].label

    if(name.length > 47){
      name = `${name.substring(0, 44).trim()}...`
    }
    return (
      <div className="podcast-box" title={podcast['im:name'].label}>
        <img className="podcast-box__image" src={image}/>
        <div className="podcast-box__text">
          <div className="podcast-box__name">{name}</div>
          <div className="podcast-box__author">{`Author: ${author}`}</div>
        </div>
      </div>
    )
  }
}
