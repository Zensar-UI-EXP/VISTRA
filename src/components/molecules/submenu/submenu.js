import React from "react"
import LinkComponent from "../../atoms/link"
const Submenu = props => {
  return (
    <>
      {props.submenu.length > 0 ? (
        <ul className={`submenu ${props.showSubMenuClass}`}>
          {props.submenu.map((item, index) => (
            <li key={index} className="">
              <LinkComponent {...item} className="submenu__link" />
            </li>
          ))}
        </ul>
      ) : (
        <div></div>
      )}
    </>
  )
}
Submenu.defaultProps = {
  className: ``,
}
export default Submenu
