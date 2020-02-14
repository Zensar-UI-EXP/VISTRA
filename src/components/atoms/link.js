import Link from "gatsby-link"
import React from "react"
const LinkComponent = props => {
  let logoImage = props.bgImage
    ? {
        background: `url(${props.bgImage}) no-repeat transparent`,
        backgroundSize: `contain`,
      }
    : {}
  return (
    <Link
      style={{ ...logoImage, color: props.fontColor }}
      className={`link ${props.className}`}
      to={props.to}
      title={props.title}
      activeClassName="active"
      dangerouslySetInnerHTML={{
        __html: props.label,
      }}
    ></Link>
  )
}

LinkComponent.defaultProps = {
  className: ``,
  to: ``,
  label: `Link Story`,
}
export default LinkComponent
