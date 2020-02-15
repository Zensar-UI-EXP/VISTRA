import React from "react"
import Title from "../../atoms/title/title"
import Button from "../../atoms/button/button"

const ConnectLayout = props => {
  return (
    <div className="connectcont" style={props.overallCustomStyle}>
      <div className="connectcont__inner" style={props.contentCustomStyle}>
        <div className="connectcont__left">
          <h1 className="connectcont__heading">{props.heading}</h1>
          <h2 className="connectcont__desc">{props.description}</h2>
          <Button className={`connectcont__btn ${props.btnClassName}`} label={props.buttonLabel} />
        </div>
        <div className="connectcont__right">
          <img className="connectcont__rtimg" src={props.image} alt={props.description} />
        </div>
      </div>
    </div>
  )
}

export default ConnectLayout