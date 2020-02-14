import React from "react"
import Image from "../atoms/source/source"
import dogWithBoyImage from "../../images/dog__with__boy.jpg"

const FullWidthImage = props => {
  return <Image className="fullwidthimage" {...props} alt="Full Width Image" />
}
FullWidthImage.defaultProps = {
  src: dogWithBoyImage,
}
export default FullWidthImage
