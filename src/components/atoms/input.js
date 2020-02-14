import React from "react"
const Input = props => {
  return (
    <input
      className={`input ${props.className}`}
      placeholder={props.placeholder}
      type={props.type}
      title={props.placeholder}
    />
  )
}

Input.defaultProps = {
  className: ``,
  placeholder: ``,
  type: `text`,
}
export default Input
