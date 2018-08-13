import React from 'react'
import { withRouter } from 'react-router'

class Episode extends React.Component{
  render(){
    const { list, match } = this.props
    const { episodeId } = match.params;
    if(list && list[episodeId]){
      const episode = list[episodeId]
      return (
        <div className="episode">
          <div className="episode__box">
            <div className="episode__title">
              {episode.title}
            </div>
            <div
              className="episode__content"
              dangerouslySetInnerHTML={{__html: episode.content}}
            />
            <div className="podcaster__horizontal-bar"/>
            <audio controls autoPlay className="episode__player">
              <source src={episode.enclosure.url} type={episode.enclosure.type} />
            </audio>
          </div>
        </div>
      )
    }
  }
}

export default withRouter(Episode)
