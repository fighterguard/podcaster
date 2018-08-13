import React from 'react'
import moment from 'moment'
import { withRouter } from 'react-router'

const PodcastList = ({ list, history, match }) => (
  <div className="podcast-list">
    <div className="podcast-list__title-box">
     {`Episodes: ${list.length}`}
    </div>
    <div className="podcast-list__list-box">
      <div className="podcast-list__header-row">
        <div className="podcast-list__first-cell">
          Title
        </div>
        <div className="podcast-list__second-cell">
          Date
        </div>
        <div className="podcast-list__third-cell">
          Duration
        </div>
      </div>
      {list.map((item, index) => {
        return (  
        <div
          className="podcast-list__item-row"
          key={index}
          onClick={() => {history.push(`/podcast/${match.params.podcastId}/episode/${index}`)}}
        >
          <div className="podcast-list__first-cell">
            {item.title}
          </div>
          <div className="podcast-list__second-cell">
            {moment(item.isoDate).format('D/M/Y')}
          </div>
          <div className="podcast-list__third-cell">
            {item.itunes.duration}
          </div>
        </div>
        )}
      )}
    </div>
  </div>
)

export default withRouter(PodcastList)
