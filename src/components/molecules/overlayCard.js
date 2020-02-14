import React from "react"
import Title from "../atoms/title/title"
import Button from "../atoms/button/button"
import Image from "../atoms/source/source"

const overlayCard = props => (
  <>
    <Title label={props.titleLabel} className={props.titleClass} />
    <div className="pos--relative mb--20">
      <Image src={props.image} className={props.imageClass} alt={props.alt} />
      <Title label={props.overlay} className="image--overlay" />
    </div>
    <Button label={props.btnLabel} className={props.btnClass} />
  </>
)

export default overlayCard
