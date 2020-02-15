import React from "react"
import Title from "../../atoms/title/title"

const InfoLayout = props => {
  return (
    <div className="infoLayout" style={props.overallCustomStyle}>
      <div className="infoLayout__content" style={props.contentCustomStyle}>
        <p className="infoLayout__desc">{props.desc}</p>
      </div>
    </div>
  )
}

export default InfoLayout