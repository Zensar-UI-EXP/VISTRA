import React from "react"
import Title from "../../atoms/title/title"
import Link from "../../atoms/link"
const Exploreproduct = props => {
  return (
    <>
      {props && props.label && (
        <div className="exploreproduct">
          <div className="exploreproduct__head">
            <div className="exploreproduct__line"></div>
            <Title {...props} className="exploreproduct__title" />
            <div className="exploreproduct__line"></div>
          </div>
          <div className="exploreproduct__cards">
            {props.lists.map((item, index) => (
              <div key={index} className="exploreproduct__item">
                <Link label={item.label} className="exploreproduct__itemhead" />
                <Link label={item.svg} />
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  )
}
Exploreproduct.defaultProps = {
  className: ``,
  label: ``,
}

export default Exploreproduct
