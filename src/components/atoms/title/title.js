import React from "react"
const Title = props => {
  return (
    <p
      className={`para ${props.className}`}
      dangerouslySetInnerHTML={{
        __html: props.label,
      }}
    ></p>
  )
}

Title.defaultProps = {
  className: ``,
}
export default Title
