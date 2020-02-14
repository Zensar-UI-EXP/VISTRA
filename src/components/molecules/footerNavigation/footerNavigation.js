import React from "react"
import LinkComponent from "../../atoms/link"

const FooterNavigation = props => {
  return (
    <>
      <ul className={`footernav`}>
        {props.data.map((item, index) => (
          <li
            key={index}
            className={`footernav__item ${props.parentClassName}`}
          >
            <LinkComponent {...item} className={props.className} />
          </li>
        ))}
      </ul>
    </>
  )
}

export default FooterNavigation
