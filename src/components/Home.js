import React from 'react'
import { Link } from 'react-router-dom'
import PodcastBox from './PodcastBox'
import SearchBox from './SearchBox'


export default class Home extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      searchParam: ''
    }

    this.handleSearch = this.handleSearch.bind(this)
  }

  handleSearch(event){
    this.setState({
      searchParam: event.target.value.trim()
    })
  }

  filteredPodcasts(list){
    if(this.state.searchParam === ''){
      return list
    }else{
      const filteredList = list.filter(item => {
        const filterText = `${item['im:name'].label}${item['im:artist'].label}`.toLowerCase()
        return filterText.indexOf(this.state.searchParam.toLowerCase()) !== -1
      })
      return filteredList
    }

  }

  render(){
    const { podcastList } = this.props
    const filteredPodcasts = this.filteredPodcasts(podcastList)
    return (
      <div className="podcaster__home">
        <SearchBox
          value={this.state.searchParam}
          onChange={this.handleSearch}
          totalMatches={filteredPodcasts.length}
        />
        <div className="podcaster__home__list-container">
          <div className="podcaster__home__list">
            {
              filteredPodcasts.map(podcast => (
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
