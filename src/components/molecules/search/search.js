import React from "react"
import Input from "../../atoms/input"
import Icon from "../../atoms/icon"

const Search = props => (
  <div className={`search ${props.searchActive}`}>
    <div className="search__content">
      <Input placeholder="Search" className="search__input" />
      <Icon className="glyphicon-search search__icon" />
    </div>
  </div>
)

export default Search
