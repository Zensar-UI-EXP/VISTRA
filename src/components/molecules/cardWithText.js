import React from "react"
import Title from "../atoms/title/title"
import Button from "../atoms/button/button"
import Image from "../atoms/source/source"

const CardWithText = props => (
  <>
    <Image src={props.image} className={props.imageClass} alt={props.alt} />
    <Title label={props.titleLabel} className={props.titleClass} />
    <div className="grid__cardinfocontent">
      {props.info.map((item, index) => (
        <Title label={item} key={index} className={props.infoClass} />
      ))}
    </div>
    <Button label={props.btnLabel} className={props.btnClass} />
  </>
)

export default CardWithText
