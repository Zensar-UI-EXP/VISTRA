import React from "react"
const Icon = props => {
  return <span className={`glyphicon ${props.className}`}></span>
}

Icon.defaultProps = {
  className: ``,
}
export default Icon
