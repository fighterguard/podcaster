import React from 'react'
import { Link } from 'react-router-dom'

export default class Header extends React.Component{
  render(){
    return (
      <div className="podcaster__header">
        <div className="podcaster__header__title">
          <Link to='/'>Podcaster</Link>
        </div>
        {this.props.isLoading &&
          (<div className="podcaster__header__loading-box"/>)}
        <div className="podcaster__horizontal-bar"/>
      </div>
    )
  }
}