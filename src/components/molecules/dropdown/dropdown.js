import React from "react"
import Title from "../../atoms/title/title"

const Dropdown = props => {
  return (
    <div className="dropdownlist">
      <Title label={props.options[0].label} className="dropdownlist__title" />
      <Title label="" className="dropdownlist__downarrow" />
    </div>
  )
}

Dropdown.defaultProps = {
  className: ``,
  options: [],
}
export default Dropdown
