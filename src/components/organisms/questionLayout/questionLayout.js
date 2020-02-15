import React from "react"
import Title from "../../atoms/title/title"
import Button from "../../atoms/button/button"

const QuestionLayout = props => {
  return (
    <div className="questioncont" style={props.overallCustomStyle}>
      <div className="questioncont__inner" style={props.contentCustomStyle}>
        <div className="questioncont__left">
          <h1 className="questioncont__heading">{props.leftcontent.heading}</h1>
          {props.leftcontent.description ? <h2 className="questioncont__desc">{props.leftcontent.description}</h2> : ""}
          <Button className={`questioncont__btn ${props.leftcontent.btnClassName}`} label={props.leftcontent.buttonLabel} />
          <div className="clr--both"></div>
          <a className="questioncont__calllink" href="javascript:void(0);" title="Click to call">{props.rightcontent.callLink}</a>
        </div>
        <div className="questioncont__right">
          <h1 className="questioncont__heading">{props.rightcontent.heading}</h1>
          {props.rightcontent.description ? <h2 className="questioncont__desc">{props.rightcontent.description}</h2> : ""}
          <Button className={`questioncont__btn ${props.rightcontent.btnClassName}`} label={props.rightcontent.buttonLabel} />
          <div className="clr--both"></div>
          {props.rightcontent.callLink ? <a className="questioncont__calllink" href="javascript:void(0);" title="Click to call">{props.rightcontent.callLink}</a> : ""}
        </div>
      </div>
      <div className="clr--both"></div>
    </div>
  )
}

export default QuestionLayout