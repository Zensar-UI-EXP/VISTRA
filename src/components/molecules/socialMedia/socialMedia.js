import React from "react"
import LinkComponent from "../../atoms/link"

const socialData = [
  { label: `<span class="fa fa-facebook socialmedia__icon"></span>`, to: "/" },
  { label: `<span class="fa fa-instagram socialmedia__icon"></span>`, to: "/" },
  { label: `<span class="fa fa-twitter socialmedia__icon"></span>`, to: "/" },
  { label: `<span class="fa fa-youtube socialmedia__icon"></span>`, to: "/" },
]
const SocialMedia = props => {
  return (
    <ul className="socialmedia">
      {socialData.map((item, index) => (
        <li key={index} className="">
          <LinkComponent {...item} className="socialmedia__link" />
        </li>
      ))}
    </ul>
  )
}

export default SocialMedia
