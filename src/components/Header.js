import React from 'react'
import { Link } from 'react-router-dom'

export default class Header extends React.Component{
  render(){
    return (
      <div className="podcaster__header">
        <h3 className="podcaster__header__title">
          <Link to='/'>Podcaster</Link>
        </h3>
      </div>
    )
  }
}