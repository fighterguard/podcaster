import React from 'react'

const SearchBox = ({ value, onChange, totalMatches }) => (
  <div className="search-box">
    <div className="search-box__content">
      <div className="search-box__total-matches">
        {totalMatches}
      </div>
      <input
        type="text"
        value={value}
        className="search-box__input"
        placeholder="Filter podcasts..."
        onChange={onChange}
      />
    </div>
  </div>
)

export default SearchBox