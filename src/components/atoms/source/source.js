import React, { useRef, useEffect } from "react"
import Button from "../button/button"
import Title from "../title/title"
const Image = props => {
  const sourceVideo = useRef(null)
  useEffect(() => {})
  let headingColor = { color: `${props.headingColorValue}` }
  let subHeadingColor = { color: `${props.subHeadingColorValue}` }
  let videoControlClassName =
    props.videoControls == "yes" ? "" : "video--controlsoff"
  let imageMaxWidth =
    props.maxWidth !== "" ? { maxWidth: `${props.maxWidth}%` } : {}
  return (
    <div className="imagecont" style={props.imageContentStyle}>
      {props.sourceType == "image" && (
        <img
          className={props.className}
          src={`${props.src}`}
          alt={props.alt}
          style={{ ...props.imageStyle, ...imageMaxWidth }}
        />
      )}
      {props.sourceType == "video" && (
        <video
          autoPlay={`${props.videoAutoPlay} == "yes" ? "autoplay" : false`}
          loop={`${props.videoLoop == "yes"} ? "true" : false`}
          controls={`${props.videoControls == "yes"} ? "true" : false`}
          ref={sourceVideo}
          src={props.src}
          className={`imagecont--video ${props.className} ${videoControlClassName}`}
        />
      )}
      {props.imageWithContent === "yes" ? (
        <div
          className={`imagecont__conent ${props.contentAlignment}`}
          style={props.contentStyle}
        >
          <Title
            className="imagecont__heading"
            label={props.imageWithHeading}
            style={headingColor}
          />
          {props.imageWithSubHeading && (
            <Title
              className="imagecont__subheading"
              label={props.imageWithSubHeading}
              style={subHeadingColor}
            />
          )}
          {props.imageWithButton === "yes" ? (
            <Button label={props.imageButton} className={props.buttonType} />
          ) : (
            ""
          )}
        </div>
      ) : (
        ""
      )}
    </div>
  )
}

Image.defaultProps = {
  sourceType: "image",
  className: ``,
  src: ``,
  srcset: ``,
  alt: `Mars`,
  imageWithContent: `no`,
  imageWithButton: `no`,
  contentAlignment: `imagecont--leftcenter`,
  style: {},
  maxWidth: "",
}
export default Image
