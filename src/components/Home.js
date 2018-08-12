import React from 'react'
import { Link } from 'react-router-dom'

export default class Home extends React.Component{
  render(){
    return (
      <div>
        <h3>Home</h3>
        <Link to='/podcast/123'>Podcast 123</Link>
      </div>
    )
  }
}
