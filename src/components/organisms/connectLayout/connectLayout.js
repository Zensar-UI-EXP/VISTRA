import React from "react"
import Title from "../../atoms/title/title"
import Button from "../../atoms/button/button"

const ConnectLayout = props => {
  return (
    <div className="connectcont" style={props.overallCustomStyle}>
      <div className="connectcont__inner" style={props.contentCustomStyle}>
        <div className="connectcont__left">
          <h1 className="connectcont__heading" style={props.headingCustomStyle}>{props.heading}</h1>
          <h2 className="connectcont__desc" style={props.descriptionCustomStyle}>${props.description}</h2>
          <Button style={props.buttonBg} className={`connectcont__btn ${props.btnClassName}`} label={props.buttonLabel} />
        </div>
        <div className="connectcont__right">
          {props.imageVideo === "Image" ? (
            <img className="connectcont__rtimg" src={props.image} alt={props.description} />
          ) : (
            <video
              autoPlay="autoplay"
              loop="true"
              controls="false"
              src={props.videoSrc}
              className={`connectcont__video video--controlsoff`}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default ConnectLayout