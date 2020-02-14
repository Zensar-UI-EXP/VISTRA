import React from "react"

const Button = props => {
  return (
    <button style={props.style} className={`btn ${props.className}`}>
      {props.label}
    </button>
  )
}

Button.defaultProps = {
  className: ``,
  style: {},
}
export default Button
