import React from 'react'
import { Link } from 'react-router-dom'

export default class Home extends React.Component{
  render(){
    const { podcast, match, location, history } = this.props
    return (
      <div className="podcast-box">
        <img className="podcast-box__image" src={podcast['im:image'][2].label}/>
        <div className="podcast-box__text">
          <div className="podcast-box__name">{podcast['im:name'].label}</div>
          <div className="podcast-box__author">{`Author: ${podcast['im:artist'].label}`}</div>
        </div>
      </div>
    )
  }
}
