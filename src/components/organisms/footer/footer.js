import React from "react"
import SocialMedia from "../../molecules/socialMedia/socialMedia"
import FooterNavigation from "../../molecules/footerNavigation/footerNavigation"

const Footer = props => {
  return (
    <footer className="footer">
      <div className="footer__nav">
        <div>
          {props.data.map((item, index) => (
            <FooterNavigation
              key={index}
              data={item.navigation}
              parentClassName={item.parentClassName}
              className={item.className}
            />
          ))}
        </div>
        {props.socialMedia == "yes" && <SocialMedia />}
      </div>
    </footer>
  )
}

export default Footer
