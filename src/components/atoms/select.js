import React from "react"
const Select = props => {
  return (
    <select className={`select ${props.className}`}>
      {props.options.map((item, index) => (
        <option key={index}>{item.label}</option>
      ))}
    </select>
  )
}

Select.defaultProps = {
  className: ``,
  options: [],
}
export default Select
